import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Oauth2ButtonComponent } from './components/oauth2-button/oauth2-button.component';

@NgModule({
  imports: [ReactiveFormsModule],
  exports: [ReactiveFormsModule, ButtonComponent, Oauth2ButtonComponent],
  declarations: [ButtonComponent, Oauth2ButtonComponent],
})
export class SharedModule {}
