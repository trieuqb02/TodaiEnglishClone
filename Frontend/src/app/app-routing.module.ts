import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {UserLayoutComponent} from './layouts/user-layout/user-layout.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {UserHomeLayoutComponent} from "./layouts/user-home-layout/user-home-layout.component";
import {UserNewsDetailLayoutComponent} from "./layouts/user-news-detail-layout/user-news-detail-layout.component";
import {AdminHomeLayoutComponent} from "./layouts/admin-home-layout/admin-home-layout.component";
import {UserVideoLayoutComponent} from "./layouts/user-video-layout/user-video-layout.component";
import {UserTestLayoutComponent} from "./layouts/user-test-layout/user-test-layout.component";
import {NotFoundLayoutComponent} from "./layouts/not-found-layout/not-found-layout.component";
import {AdminTopicLayoutComponent} from "./layouts/admin-topic-layout/admin-topic-layout.component";
import {AdminSourceLayoutComponent} from "./layouts/admin-source-layout/admin-source-layout.component";
import {AdminNewsLayoutComponent} from "./layouts/admin-news-layout/admin-news-layout.component";
import {AdminVideoLayoutComponent} from "./layouts/admin-video-layout/admin-video-layout.component";
import {AdminStatisticsLayoutComponent} from "./layouts/admin-statistics-layout/admin-statistics-layout.component";
import {AdminTestLayoutComponent} from "./layouts/admin-test-layout/admin-test-layout.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./modules/auth/auth-routing.module')
        .then((m) => m.AuthRoutingModule
        ),
  },
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'home',
        component: UserHomeLayoutComponent,
        loadChildren: () =>
          import('./modules/user/home/home-routing.module')
            .then(m => m.HomeRoutingModule)
      },
      {
        path: 'video',
        component: UserVideoLayoutComponent,
        loadChildren: () =>
          import('./modules/user/video/video-routing.module')
            .then(m => m.VideoRoutingModule)
      },
      {
        path: 'test',
        component: UserTestLayoutComponent,
        loadChildren: () =>
          import('./modules/user/test/test-routing.module')
            .then(m => m.TestRoutingModule)
      },
      {
        path: 'detail',
        component: UserNewsDetailLayoutComponent,
        loadChildren: () =>
          import('./modules/user/news-detail/news-detail-routing.module')
            .then(m => m.NewsDetailRoutingModule)
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    data: { breadcrumb: 'Home' },
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full',
      },
      {
        path: 'home',
        component: AdminHomeLayoutComponent,
        loadChildren: () =>
          import('./modules/admin/home/home-routing.module')
            .then(m => m.HomeRoutingModule),
      },
      {
        path: 'topic',
        component: AdminTopicLayoutComponent,
        loadChildren: () =>
          import('./modules/admin/topic/topic-routing.module')
            .then(m => m.TopicRoutingModule),
        data: {breadcrumb: 'Topic'},
      },
      {
        path: 'source',
        component: AdminSourceLayoutComponent,
        loadChildren: () =>
          import('./modules/admin/source/source-routing.module')
            .then(m => m.SourceRoutingModule),
        data: { breadcrumb: 'Source' },
      },
      {
        path: 'news',
        component: AdminNewsLayoutComponent,
        loadChildren: () =>
          import('./modules/admin/news/news-routing.module')
            .then(m => m.NewsRoutingModule),
        data: { breadcrumb: 'News' },
      },
      {
        path: 'test',
        component: AdminTestLayoutComponent,
        loadChildren: () =>
          import('./modules/admin/test/test-routing.module')
            .then(m => m.TestRoutingModule),
        data: { breadcrumb: 'Test' },
      },
      {
        path: 'video',
        component: AdminVideoLayoutComponent,
        loadChildren: () =>
          import('./modules/admin/video/video-routing.module')
            .then(m => m.VideoRoutingModule),
        data: { breadcrumb: 'Video' },
      },
      {
        path: 'statistics',
        component: AdminStatisticsLayoutComponent,
        loadChildren: () =>
          import('./modules/admin/statistics/statistics-routing.module')
            .then(m => m.StatisticsRoutingModule),
        data: { breadcrumb: 'Statistics' },
      },
    ],
  },
  {
    path: '**',
    component: NotFoundLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
