package gateway.configuration;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;

@Configuration
public class GatewayConfig {

    // RouteLocator is an interface in spring cloud gateway to determine routes and filters for requests
    @Bean
    public RouteLocator routeLocator(RouteLocatorBuilder builder){
        return builder.routes()
                .route("identity-service", r -> r.path(
                                "/api/v1/identity/**").and()
                        .method(HttpMethod.POST, HttpMethod.GET)
                        .uri("lb://identity-service"))
                .build();
    }
}
