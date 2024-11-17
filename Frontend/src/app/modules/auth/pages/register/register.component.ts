import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterModel} from '../../../../data/models/register.interface';
import ValidationComparePassword from '../../../../core/validations/ValidationComparePassword';
import {IdentityService} from "../../../../data/services/identity.service";
import {LoadingService} from "../../../../data/services/loading.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  constructor(
    private identityService: IdentityService,
    protected loadingService: LoadingService,) {}

  public submitted: Boolean = false;

  public messageError!: string;

  registerForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(255)]),
    firstName: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    lastName: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
  }, {
    validators: ValidationComparePassword,
  })

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
      this.loadingService.show();
      setTimeout(()=> {
        const data: RegisterModel = {
          username: this.f['username'].value,
          firstName: this.f['firstName'].value,
          lastName: this.f['lastName'].value,
          password: this.f['password'].value
        }
        this.identityService.register(data).subscribe({
          next: value => {
            console.log(value);
          },
          error: value => {
            console.log(value)
            this.messageError = value.message;
          }
        })
      }, 1000)
    }
  }

  ngOnInit() {

  }
}
