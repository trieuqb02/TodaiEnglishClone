const keycloakTokenUrl = 'http://localhost:9999/realms/reading-newspaper-realm/protocol/openid-connect/token';
const keycloakLogoutUrl = 'http://localhost:9999/realms/reading-newspaper-realm/protocol/openid-connect/logout';
const keycloakOauth2Url = `http://localhost:9999/realms/reading-newspaper-realm/protocol/openid-connect/auth`;
const keycloakUrlIntrospect = 'http://localhost:9999/realms/reading-newspaper-realm/protocol/openid-connect/token/introspect';
const clientId = 'reading-newspaper-client';
const clientSecret = '4CwhKwmfX1LtxzKot6p5bxqzd7dyy4YG';
const grantType = "password"
export {keycloakTokenUrl,keycloakLogoutUrl, keycloakOauth2Url,keycloakUrlIntrospect, clientId, clientSecret, grantType}
