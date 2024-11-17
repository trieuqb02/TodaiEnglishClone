package gateway.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
public class SecurityConfig {

    @Value("${spring.security.oauth2.resourceserver.jwt.jwk-set-uri}")
    private String jwkUri;

    private static final String[] PUBLIC_ENDPOINTS = new String[]{
            "/api/v1/identity/register",
            "/api/v1/topic/all",
            "/api/v1/source/all",
    };

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        return http
                .authorizeExchange(auth -> auth
                        .pathMatchers(PUBLIC_ENDPOINTS).permitAll()
                        .anyExchange().authenticated())
                .csrf(ServerHttpSecurity.CsrfSpec::disable)
                .oauth2ResourceServer(oAuth2ResourceServer -> oAuth2ResourceServer
                        .jwt(jwtSpec -> jwtSpec.jwkSetUri(jwkUri))
                        .authenticationEntryPoint(new CustomAuthenticationEntryPoint()))
                .build();
    }
}
