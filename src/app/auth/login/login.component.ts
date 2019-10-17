import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordSameValidator} from '../../shared/FieldsSameValidator.directive';
import {Router} from '@angular/router';
import {DataPassService} from '../../shared/datapass.service';
import {stringify} from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required, Validators.email, Validators.maxLength(100)]),
    password: new FormControl('', [
      Validators.required, Validators.maxLength(100), Validators.minLength(6)]),

  });


  constructor(private router: Router, private datapassservice: DataPassService) {
  }

  ngOnInit() {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    this.datapassservice.user.next(this.loginForm.get('email').value);
    console.warn(this.loginForm.get('email').value);
    this.router.navigateByUrl('home');
  }
}
