import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {UserLayoutComponent} from './layouts/user-layout/user-layout.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {NotFoundLayoutComponent} from "./layouts/not-found-layout/not-found-layout.component";

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
        loadChildren: () =>
          import('./modules/user/home/home-routing.module')
            .then(m => m.HomeRoutingModule)
      },
      {
        path: 'video',
        loadChildren: () =>
          import('./modules/user/video/video-routing.module')
            .then(m => m.VideoRoutingModule)
      },
      {
        path: 'test',
        loadChildren: () =>
          import('./modules/user/test/test-routing.module')
            .then(m => m.TestRoutingModule)
      },
      {
        path: 'news/:id/detail',
        loadChildren: () =>
          import('./modules/user/news-detail/news-detail-routing.module')
            .then(m => m.NewsDetailRoutingModule)
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    data: {breadcrumb: 'Home'},
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/admin/home/home-routing.module')
            .then(m => m.HomeRoutingModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/admin/management-user/management-user-routing.module')
            .then(m => m.ManagementUserRoutingModule),
        data: {breadcrumb: 'Management User'},
      },
      {
        path: 'topic',
        loadChildren: () =>
          import('./modules/admin/management-topic/management-topic-routing.module')
            .then(m => m.ManagementTopicRoutingModule),
        data: {breadcrumb: 'Management Topic'},
      },
      {
        path: 'source',
        loadChildren: () =>
          import('./modules/admin/management-source/management-source-routing.module')
            .then(m => m.ManagementSourceRoutingModule),
        data: {breadcrumb: 'Management Source'},
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./modules/admin/management-news/management-news-routing.module')
            .then(m => m.ManagementNewsRoutingModule),
        data: {breadcrumb: 'Management News'},
      },
      {
        path: 'test',
        loadChildren: () =>
          import('./modules/admin/management-test/test-routing.module')
            .then(m => m.TestRoutingModule),
        data: {breadcrumb: 'Management Test'},
      },
      {
        path: 'video',
        loadChildren: () =>
          import('./modules/admin/management-video/management-video-routing.module')
            .then(m => m.ManagementVideoRoutingModule),
        data: {breadcrumb: 'Management Video'},
      },
      {
        path: 'statistics',
        loadChildren: () =>
          import('./modules/admin/statistics/statistics-routing.module')
            .then(m => m.StatisticsRoutingModule),
        data: {breadcrumb: 'Management Statistics'},
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
