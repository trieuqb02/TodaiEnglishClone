import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AuthModule} from './modules/auth/auth.module';
import {HttpClientModule} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
// import {InterceptorProviders} from "./core/interceptors/interceptor";
import {UserLayoutComponent} from "./layouts/user-layout/user-layout.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {UserHeaderComponent} from './layouts/user-layout/components/user-header/user-header.component';
import {UserFooterComponent} from './layouts/user-layout/components/user-footer/user-footer.component';
import {SharedModule} from "./shared/shared.module";
import {HomeModule} from "./modules/user/home/hone.module";
import {NewsDetailModule} from "./modules/user/news-detail/news-detail.module";
import {AdminHeaderComponent} from './layouts/admin-layout/components/admin-header/admin-header.component';
import {AdminFooterComponent} from './layouts/admin-layout/components/admin-footer/admin-footer.component';
import {AdminNavBarComponent} from './layouts/admin-layout/components/admin-nav-bar/admin-nav-bar.component';
import {ManagementSourceModule} from "./modules/admin/management-source/management-source.module";
import {ManagementTopicModule} from './modules/admin/management-topic/management-topic.module';
import {ManagementNewsModule} from "./modules/admin/management-news/management-news.module";
import {NotFoundLayoutComponent} from "./layouts/not-found-layout/not-found-layout.component";
import {ManagementUserModule} from "./modules/admin/management-user/management-user.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    UserLayoutComponent,
    UserHeaderComponent,
    UserFooterComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminNavBarComponent,
    NotFoundLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    NewsDetailModule,
    ManagementSourceModule,
    ManagementTopicModule,
    ManagementNewsModule,
    ManagementUserModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
