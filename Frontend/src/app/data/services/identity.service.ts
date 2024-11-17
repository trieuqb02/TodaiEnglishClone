import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  clientId,
  clientSecret,
  grantType, keycloakUrlIntrospect,
  keycloakTokenUrl, keycloakLogoutUrl
} from '../../core/helpers/keyclock.helper'
import {RegisterModel} from "../models/register.interface";
import baseUrl from "../../core/helpers/url.helper";
import {LoginModel} from "../models/login.interface";
import {KeycloakToken} from "../models/token.interface";
import {CookieService} from "ngx-cookie-service";
import {REFRESH_TOKEN_KEY} from "../../core/helpers/app.helper";
import {TokenIntrospectionModel} from "../models/token.introspection.interface";

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  constructor(
    private http: HttpClient,
    private cookieService: CookieService) {}

  login(data: LoginModel): Observable<KeycloakToken> {
    const body = new HttpParams()
      .set('username', data.username)
      .set('password', data.password)
      .set('client_secret', clientSecret)
      .set('client_id', clientId)
      .set('grant_type', grantType)
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    return this.http.post<KeycloakToken>(keycloakTokenUrl, body.toString(), {
        headers: headers,
        withCredentials: true
      }
    );
  }

  getToken(code: string) {
    const params = new HttpParams()
      .set('client_id', clientId)
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', 'http://localhost:4200/home')
      .set('client_secret', clientSecret);
    return this.http.post(keycloakTokenUrl, params);
  }

  register(data: RegisterModel): Observable<RegisterModel> {
    return this.http.post<RegisterModel>(`${baseUrl}/identity/register`, data);
  }

  refreshToken(): Observable<KeycloakToken> {
    const refreshToken = this.cookieService.get(REFRESH_TOKEN_KEY);
    const body = new HttpParams()
      .set('refresh_token', refreshToken)
      .set('client_id', clientId)
      .set('client_secret', clientSecret)
      .set('grant_type', 'refresh_token');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post<KeycloakToken>(keycloakTokenUrl, body.toString(), {
      headers: headers,
      withCredentials: true
    })
  }

  introspectToken(token: string): Observable<TokenIntrospectionModel> {
    const body = new HttpParams()
      .set('token', token)
      .set('client_id', clientId)
      .set('client_secret', clientSecret);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    return this.http.post<TokenIntrospectionModel>(
      keycloakUrlIntrospect,
      body.toString(),
      {headers}
    );
  }

  logout(): Observable<any> {
    const refreshToken = this.cookieService.get(REFRESH_TOKEN_KEY);
    const body = new URLSearchParams();
    body.set('client_id', clientId);
    body.set('client_secret', clientSecret);
    body.set('refresh_token', refreshToken);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(keycloakLogoutUrl, body.toString(), {headers});
  }
}
