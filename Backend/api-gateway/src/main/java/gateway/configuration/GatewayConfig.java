package gateway.configuration;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator routeLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("identity-service", r -> r.path(
                                "/api/v1/identity/**").and()
                        .uri("lb://identity-service"))
                .route("news-service", r -> r.path(
                                "/api/v1/topic/**",
                                "/api/v1/source/**",
                                "/api/v1/news/**").and()
                        .uri("lb://news-service"))
                .build();
    }
}
