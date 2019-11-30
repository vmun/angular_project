import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';


const authRoutes = [
  { path: '', redirectTo: 'login'},
  { path: 'info', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
