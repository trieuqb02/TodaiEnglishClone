import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {LoginModel} from '../../../../data/models/login.interface';
import {IdentityService} from "../../../../data/services/identity.service";
import {CookieService} from "ngx-cookie-service";
import {REFRESH_TOKEN_KEY, TOKEN_KEY, TOKEN_TYPE_KEY} from "../../../../core/helpers/app.helper";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public submitted: Boolean = false;
  public messageUsernameError!: String;
  public messagePasswordError!: String;
  private login: LoginModel = {username: "", password: ""};

  constructor(private formBuilder: FormBuilder, private identityService: IdentityService, private cookieService: CookieService) {
  }

  loginInForm = this.formBuilder.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });

  get f(): { [key: string]: AbstractControl } {
    return this.loginInForm.controls;
  }

  cancelError() {
    if (this.submitted) {
      this.submitted = false;
    }
  }

  onSubmit() {
    if (this.messageUsernameError != '') {
      this.messageUsernameError = '';
    }
    if (this.messagePasswordError != '') {
      this.messagePasswordError = '';
    }
    this.submitted = true;
    if (this.loginInForm.valid) {
      this.login.username = this.f['username'].value;
      this.login.password = this.f['password'].value;
      this.identityService.login(this.login).subscribe({
        next: value => {
          this.cookieService.set(TOKEN_KEY, value.access_token);
          this.cookieService.set(REFRESH_TOKEN_KEY, value.refresh_token);
          this.cookieService.set(TOKEN_TYPE_KEY, value.token_type)
        },
        error: value => {
          console.log(value);
        }
      })
    }
  }

  ngOnInit() {}
}
