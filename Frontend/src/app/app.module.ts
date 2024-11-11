import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AuthModule} from './modules/auth/auth.module';
import {HttpClientModule} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {InterceptorProviders} from "./core/interceptors/interceptor";
import {UserLayoutComponent} from "./layouts/user-layout/user-layout.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {UserHeaderComponent} from './layouts/user-layout/components/user-header/user-header.component';
import {UserFooterComponent} from './layouts/user-layout/components/user-footer/user-footer.component';
import { UserHomeLayoutComponent } from './layouts/user-home-layout/user-home-layout.component';
import {SharedModule} from "./shared/shared.module";
import {HomeModule} from "./modules/user/home/hone.module";

@NgModule({
  declarations: [AppComponent, AuthLayoutComponent, UserLayoutComponent, AdminLayoutComponent, UserHeaderComponent, UserFooterComponent, UserHomeLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, HttpClientModule, SharedModule,HomeModule],
  providers: [CookieService, InterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
}
