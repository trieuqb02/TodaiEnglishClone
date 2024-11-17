import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';

@NgModule({
  imports: [AuthRoutingModule, SharedModule],
  declarations: [LoginComponent, RegisterComponent],
})
export class AuthModule {
}
