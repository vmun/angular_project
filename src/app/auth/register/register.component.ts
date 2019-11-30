import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordSameValidator} from '../../shared/FieldsSameValidator.directive';
import {Router} from '@angular/router';
import {DataPassService} from '../../shared/services/datapass.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  RegisterForm = new FormGroup({
      username: new FormControl('', [
        Validators.required, Validators.maxLength(100)]),
      email: new FormControl('', [
        Validators.required, Validators.email, Validators.maxLength(100)]),
      password: new FormControl('', [
        Validators.required, Validators.maxLength(100), Validators.minLength(6)]),
      conf_password: new FormControl('', [
        Validators.required, Validators.maxLength(100), Validators.minLength(6)])
    },
    {validators: PasswordSameValidator}); // cross-field validation for passwords


  constructor(private router: Router, private datapassservice: DataPassService) {
  }

  ngOnInit() {
  }

  get username() {
    return this.RegisterForm.get('username');
  }

  get email() {
    return this.RegisterForm.get('email');
  }

  get password() {
    return this.RegisterForm.get('password');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.datapassservice.register(
      this.RegisterForm.get('username').value,
      this.RegisterForm.get('email').value,
      this.RegisterForm.get('password').value).then(res => {
      this.router.navigateByUrl('auth/login');
    });

  }
}
