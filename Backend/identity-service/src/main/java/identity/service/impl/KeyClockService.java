package identity.service.impl;

import identity.constant.RoleConstant;
import identity.exception.GlobalException;
import identity.payload.request.RegisterRequest;
import identity.payload.response.UserResponse;
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
public class KeyClockService  {

    @Value("${keycloak.realm}")
    String realm;

    final Keycloak keycloakClient;

    public void createRole(String name, String description, Boolean init) {
        try {
            keycloakClient.realm(realm).roles().get(name).toRepresentation();
            if(!init){
                throw new GlobalException("Role already exist!", HttpStatus.BAD_REQUEST);
            }
        } catch (NotFoundException e) {
            RoleRepresentation newRole = new RoleRepresentation();
            newRole.setName(name);
            newRole.setDescription(description);
            keycloakClient.realm(realm).roles().create(newRole);
        }
    }

    public UserResponse createUser(RegisterRequest request) {
        UserRepresentation userRep = getUserRepresentation(request);
        try (Response response = keycloakClient.realm(realm).users().create(userRep)) {
            if (response.getStatus() == 201) {
                String userId = response.getLocation().getPath().replaceAll(".*/([^/]+)$", "$1");
                RoleRepresentation role = keycloakClient.realm(realm).roles().get(RoleConstant.CUSTOMER).toRepresentation();
                UsersResource usersResource = keycloakClient.realm(realm).users();
                usersResource.get(userId).roles().realmLevel().add(Collections.singletonList(role));
            } else if (response.getStatus() == 409){
                throw new GlobalException("Username already exist", HttpStatus.BAD_REQUEST);
            } else{
                throw new GlobalException("Error create user", HttpStatus.BAD_REQUEST);
            }
            return UserResponse.builder()
                    .firstName(String.valueOf(response.getStatus()))
                    .lastName(userRep.getLastName())
                    .username(userRep.getUsername())
                    .build();
        } catch (Exception e) {
            throw new GlobalException("Error create user", HttpStatus.BAD_REQUEST);
        }
    }

    private static UserRepresentation getUserRepresentation(RegisterRequest request) {
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
        return userRep;
    }

}
