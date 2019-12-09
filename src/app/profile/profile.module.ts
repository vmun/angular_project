import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile/profile.component';
import {ProfileRoutingModule} from './profile-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule, MatGridListModule} from '@angular/material';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule, ProfileRoutingModule, ReactiveFormsModule, MatCardModule, MatGridListModule
  ]
})
export class ProfileModule {
}
