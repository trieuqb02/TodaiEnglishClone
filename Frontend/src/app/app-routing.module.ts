import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {UserLayoutComponent} from './layouts/user-layout/user-layout.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {UserHomeLayoutComponent} from "./layouts/user-home-layout/user-home-layout.component";

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
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
