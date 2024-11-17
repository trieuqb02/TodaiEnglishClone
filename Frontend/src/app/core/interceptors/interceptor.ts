import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, from, Observable, switchMap, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {CookieService} from "ngx-cookie-service";
import {REFRESH_TOKEN_KEY, TOKEN_KEY, TOKEN_TYPE_KEY} from "../helpers/app.helper";
import {IdentityService} from "../../data/services/identity.service";
import {KeycloakToken} from "../../data/models/token.interface";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private identityService: IdentityService,
  ) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.cookieService.get(TOKEN_KEY);
    if (token != null) {
      authReq = req.clone({
        headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token),
      });
    }

    return next.handle(authReq).pipe(
      catchError((error) => {
        if (error.status == 401 && !req.url.includes('/auth/register')) {
          return this.introspectToken(req, next)
        }
        return throwError(() => error);
      })
    );
  }

  introspectToken(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.cookieService.get(TOKEN_KEY);

    return from(this.identityService.introspectToken(token)).pipe(
      switchMap(introspectionResponse => {
        if (introspectionResponse.active) {
          return next.handle(request);
        } else {
          return this.refreshToken(request, next);
        }
      }),
      catchError(err => {
        this.redirectLogout();
        return throwError(() => err);
      })
    );
  }

  refreshToken(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(this.identityService.refreshToken()).pipe(
      switchMap((value: KeycloakToken) => {
        this.cookieService.set(TOKEN_KEY, value.access_token);
        this.cookieService.set(REFRESH_TOKEN_KEY, value.refresh_token);
        this.cookieService.set(TOKEN_TYPE_KEY, value.token_type);
        return next.handle(request);
      }),
      catchError((error) => {
        if (error.status == 401) {
          this.redirectLogout();
        }
        return throwError(() => error);
      })
    );
  }

  redirectLogout = () => {
    this.identityService.logout().subscribe({
      next: value => {
        this.cookieService.deleteAll();
        this.router.navigate(['/auth/login']).then(r => {})
      }
    });
  };
}

export const InterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
];
