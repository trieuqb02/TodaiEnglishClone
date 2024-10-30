import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {RegisterModel} from '../../../../data/models/register.interface';
import ValidationComparePassword from '../../../../core/validations/ValidationComparePassword';
import {IdentityService} from "../../../../data/services/identity.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private identityService: IdentityService) {
  }

  public submitted: Boolean = false;

  public messageError!: string;

  private register: RegisterModel = {username: "", password: "", firstName: "", lastName: ""};

  registerForm = this.formBuilder.group(
    {
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    },
    {validator: ValidationComparePassword}
  );

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  cancelError() {
    if (this.submitted) {
      this.submitted = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.register.username = this.f['username'].value;
      this.register.password = this.f['password'].value;
      this.register.firstName = this.f['firstName'].value;
      this.register.lastName = this.f['lastName'].value;
      this.identityService.register(this.register).subscribe({
        next: value => {
          console.log(value);
        },
        error: value => {
          console.log(value);
        }
      })
    }
  }

  ngOnInit() {

  }
}
