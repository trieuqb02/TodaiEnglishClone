package identity.configuration;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@FieldDefaults(level = AccessLevel.PRIVATE)
public class KeycloakConfig {
    @Value("${keycloak.auth-server-url}")
    String serverUrl;

    @Value("${keycloak.realm}")
    String realm;

    @Value("${keycloak.client-id}")
    String clientId;

    @Value("${keycloak.username}")
    String username;

    @Value("${keycloak.password}")
    String password;

    @Value("${keycloak.grant-type}")
    String grantType;

    @Value("${keycloak.client-secret}")
    String clientSecret;

    @Bean
    public Keycloak keycloakClient() {
        return KeycloakBuilder.builder()
                .serverUrl(serverUrl)
                .realm(realm)
                .clientId(clientId)
                .clientSecret(clientSecret)
                .grantType(grantType)
                .username(username)
                .password(password)
                .build();
    }
}