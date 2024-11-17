import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {AsyncPipe} from "@angular/common";

@NgModule({
    imports: [AuthRoutingModule, SharedModule, AsyncPipe],
  declarations: [LoginComponent, RegisterComponent],
})
export class AuthModule {
}
