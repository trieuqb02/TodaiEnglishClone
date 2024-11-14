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
import {UserHomeLayoutComponent} from './layouts/user-home-layout/user-home-layout.component';
import {SharedModule} from "./shared/shared.module";
import {HomeModule} from "./modules/user/home/hone.module";
import {UserNewsDetailLayoutComponent} from './layouts/user-news-detail-layout/user-news-detail-layout.component';
import {NewsDetailModule} from "./modules/user/news-detail/news-detail.module";
import {AdminHeaderComponent} from './layouts/admin-layout/components/admin-header/admin-header.component';
import {AdminFooterComponent} from './layouts/admin-layout/components/admin-footer/admin-footer.component';
import {AdminNavBarComponent} from './layouts/admin-layout/components/admin-nav-bar/admin-nav-bar.component';
import {AdminHomeLayoutComponent} from './layouts/admin-home-layout/admin-home-layout.component';
import {AdminTopicLayoutComponent} from './layouts/admin-topic-layout/admin-topic-layout.component';
import {AdminSourceLayoutComponent} from './layouts/admin-source-layout/admin-source-layout.component';
import {AdminNewsLayoutComponent} from './layouts/admin-news-layout/admin-news-layout.component';
import {AdminVideoLayoutComponent} from './layouts/admin-video-layout/admin-video-layout.component';
import {AdminStatisticsLayoutComponent} from './layouts/admin-statistics-layout/admin-statistics-layout.component';
import { UserVideoLayoutComponent } from './layouts/user-video-layout/user-video-layout.component';
import { UserTestLayoutComponent } from './layouts/user-test-layout/user-test-layout.component';
import { AdminTestLayoutComponent } from './layouts/admin-test-layout/admin-test-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    UserLayoutComponent,
    AdminLayoutComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserHomeLayoutComponent,
    UserNewsDetailLayoutComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminNavBarComponent,
    AdminHomeLayoutComponent,
    AdminTopicLayoutComponent,
    AdminSourceLayoutComponent,
    AdminNewsLayoutComponent,
    AdminVideoLayoutComponent,
    AdminStatisticsLayoutComponent,
    UserVideoLayoutComponent,
    UserTestLayoutComponent,
    AdminTestLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    NewsDetailModule
  ],
  providers: [CookieService, InterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
}
