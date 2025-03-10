import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface UserFormGroup {
  username: FormControl<string>;
  password: FormControl<string>;
}

enum UserFormControlName {
  Username = 'username',
  Password = 'password',
}

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  userFormControlName = UserFormControlName;

  handleOnSubmit() {
    alert(JSON.stringify(this.userForm.value, null, 2));
  }

  userForm = new FormGroup<UserFormGroup>({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(5)],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(5)],
    }),
  });
}
