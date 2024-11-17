import {Component, Input} from '@angular/core';
import {clientId, keycloakOauth2Url} from "../../../core/helpers/keyclock.helper";

@Component({
  selector: 'app-oauth2-button',
  templateUrl: './oauth2-button.component.html',
  styleUrl: './oauth2-button.component.css'
})
export class Oauth2ButtonComponent {
  @Input() oauth2Type!: string;

  loginWithOauth2(): void{
    const redirectUri = 'http://localhost:4200/home';
    window.location.href = `${keycloakOauth2Url}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid&kc_idp_hint=${this.oauth2Type}`;
  }

}
