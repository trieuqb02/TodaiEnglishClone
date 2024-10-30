package com.news.identity.service.impl;

import com.news.identity.constant.RoleConstant;
import com.news.identity.exception.EntityAlreadyException;
import com.news.identity.exception.GlobalCode;
import com.news.identity.payload.request.RegisterRequest;
import com.news.identity.payload.response.UserResponse;
import com.news.identity.service.IKeyClockService;
import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.core.Response;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.resource.UsersResource;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.RoleRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class KeyClockService implements IKeyClockService {
    @Value("${keycloak.realm}")
    String realm;
    final Keycloak keycloakClient;

    @Override
    public void createRole(String name, String description, Boolean init) {
        try {
            keycloakClient.realm(realm).roles().get(name).toRepresentation();
            if(!init){
                throw new EntityAlreadyException("Vai trò đã tồn tại", GlobalCode.ERROR_EXIST, HttpStatus.BAD_REQUEST);
            }
        } catch (NotFoundException e) {
            RoleRepresentation newRole = new RoleRepresentation();
            newRole.setName(name);
            newRole.setDescription(description);
            keycloakClient.realm(realm).roles().create(newRole);
        }
    }

    @Override
    public UserResponse createUser(RegisterRequest request) {
        UserRepresentation userRep = new UserRepresentation();
        userRep.setUsername(request.getUsername());
        userRep.setFirstName(request.getFirstName());
        userRep.setLastName(request.getLastName());
        userRep.setEnabled(Boolean.TRUE);
        List<CredentialRepresentation> creds = new ArrayList<>();
        CredentialRepresentation cred = new CredentialRepresentation();
        cred.setType(CredentialRepresentation.PASSWORD);
        cred.setTemporary(false);
        cred.setValue(request.getPassword());
        creds.add(cred);
        userRep.setCredentials(creds);
        Response response = keycloakClient.realm(realm).users().create(userRep);
        if (response.getStatus() == 201) {
            String userId = response.getLocation().getPath().replaceAll(".*/([^/]+)$", "$1");
            RoleRepresentation role = keycloakClient.realm(realm).roles().get(RoleConstant.CUSTOMER).toRepresentation();
            UsersResource usersResource = keycloakClient.realm(realm).users();
            usersResource.get(userId).roles().realmLevel().add(Collections.singletonList(role));
        }
        return UserResponse.builder()
                .firstName(userRep.getFirstName())
                .lastName(userRep.getLastName())
                .username(userRep.getUsername())
                .build();
    }

}
