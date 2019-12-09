import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DataPassService} from '../../shared/services/datapass.service';
import {stringify} from 'querystring';
import {ProviderService} from '../../shared/services/provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: string;

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required, Validators.maxLength(100)]),
    password: new FormControl('', [
      Validators.required, Validators.maxLength(100), Validators.minLength(5)]),

  });


  constructor(private route: ActivatedRoute, private router: Router,
              private datapassservice: DataPassService,
              private provider: ProviderService) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || 'home';
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    console.warn(this.loginForm.get('username').value);

    this.provider.auth(this.loginForm.get('username').value, this.loginForm.get('password').value).then(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', res.user.username);
      console.warn(res.user.superuser);
      localStorage.setItem('superuser', JSON.stringify(res.user.superuser));
      this.router.navigateByUrl(this.returnUrl);
      this.datapassservice.user.next(this.loginForm.get('username').value);
    });
  }
}
