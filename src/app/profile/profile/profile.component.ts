import {Component, OnInit} from '@angular/core';
import {Profile, User} from '../../shared/models/models';
import {ProviderService} from '../../shared/services/provider.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordSameValidator} from '../../shared/validators/FieldsSameValidator.directive';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Profile = {
    id: 0,
    username: 'none',
    email: 'none',
    bio: 'none',
    address: 'none',
    avatar: '../../assets/Default.png'
  };

  ProfileUpdateForm = new FormGroup({
    biography: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    image: new FormControl(null, [Validators.required])
  });

  PasswordUpdateForm = new FormGroup({
      old_password: new FormControl('', [
        Validators.required, Validators.maxLength(100), Validators.minLength(6)]),
      password: new FormControl('', [
        Validators.required, Validators.maxLength(100), Validators.minLength(6)]),
      conf_password: new FormControl('', [
        Validators.required, Validators.maxLength(100), Validators.minLength(6)])
    },
    {validators: PasswordSameValidator}); // cross-field validation for passwords

  constructor(private router: Router, private provider: ProviderService) {
    this.provider.getMyProfile().then(res => {
      this.profile = res;
    });
  }

  ngOnInit() {

  }

  get bio() {
    return this.ProfileUpdateForm.get('biography');
  }

  get address() {
    return this.ProfileUpdateForm.get('address');
  }

  get image() {
    return this.ProfileUpdateForm.get('image');
  }

  get oldPassword() {
    return this.PasswordUpdateForm.get('old_password');
  }

  get password() {
    return this.PasswordUpdateForm.get('password');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.provider.updatePassword(
      this.PasswordUpdateForm.get('old_password').value,
      this.PasswordUpdateForm.get('password').value).then(res => {
      this.router.navigateByUrl('auth/login');
    });
  }

  onSubmit2() {
    // TODO: Use EventEmitter with form value
    this.provider.updateMyProfile(
      this.ProfileUpdateForm.get('biography').value,
      this.ProfileUpdateForm.get('address').value,
      this.ProfileUpdateForm.get('image').value,
      this.profile.id).then(res => {
      this.router.navigateByUrl('profile/');
    });
  }
}
