import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';


const drawRoutes = [
  { path: '', component: BodyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(drawRoutes)],
  exports: [RouterModule]
})
export class DrawRoutingModule { }
