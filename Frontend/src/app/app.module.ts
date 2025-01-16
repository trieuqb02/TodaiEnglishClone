import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AuthModule} from './modules/auth/auth.module';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
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
import {VideoModule} from "./modules/user/video/video.module";
import {TestModule} from "./modules/user/test/test.module";
import {FormsModule} from "@angular/forms";
import {API_DICTIONARY, API_DICTIONARY_VALUE} from "./app.config";

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
    NotFoundLayoutComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    HomeModule,
    NewsDetailModule,
    ManagementSourceModule,
    ManagementTopicModule,
    ManagementNewsModule,
    ManagementUserModule,
    VideoModule,
    TestModule,
    FormsModule
  ],
  providers: [
    CookieService,
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: API_DICTIONARY, useValue: API_DICTIONARY_VALUE
    }
  ]
})
export class AppModule {
}
