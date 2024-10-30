import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AuthModule} from './modules/auth/auth.module';
import {HttpClientModule} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {InterceptorProviders} from "./core/interceptors/interceptor";

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, HttpClientModule],
  providers: [CookieService, InterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
}
