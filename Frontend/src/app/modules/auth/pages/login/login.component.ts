import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginModel} from '../../../../data/models/login.interface';
import {IdentityService} from "../../../../data/services/identity.service";
import {CookieService} from "ngx-cookie-service";
import {REFRESH_TOKEN_KEY, TOKEN_KEY, TOKEN_TYPE_KEY} from "../../../../core/helpers/app.helper";
import {LoadingService} from "../../../../data/services/loading.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public submitted: Boolean = false;
  public error!: String;


  constructor(
    private identityService: IdentityService,
    private cookieService: CookieService,
    protected loadingService: LoadingService,
  ) {}

  loginInForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(255)]),
  })

  get f(): { [key: string]: AbstractControl } {
    return this.loginInForm.controls;
  }

  cancelError() {
    if (this.submitted) {
      this.submitted = false;
    }
  }

  onSubmit() {
    if (this.error != '') {
      this.error = '';
    }
    this.submitted = true;
    if (this.loginInForm.valid) {
      this.loadingService.show();
      setTimeout(() => {
        const data: LoginModel = {
          username: this.f['username'].value ?? '',
          password: this.f['password'].value ?? '',
        };
        this.identityService.login(data).subscribe({
          next: (value) => {
            console.log(value)
            this.cookieService.set(TOKEN_KEY, value.access_token);
            this.cookieService.set(REFRESH_TOKEN_KEY, value.refresh_token);
            this.cookieService.set(TOKEN_TYPE_KEY, value.token_type);
            this.loadingService.hide();
          },
          error: (error) => {
            this.loadingService.hide();
            this.error = 'Invalid username or password.';
          },
        });
      }, 2000);

    }
  }

  ngOnInit() {
  }
}
