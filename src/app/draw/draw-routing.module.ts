import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import {ImageResolverService} from '../shared/guards/image-resolver.service';


const drawRoutes = [
  { path: '',
    component: BodyComponent,
    resolve: { pageData: ImageResolverService  }},
];

@NgModule({
  imports: [RouterModule.forChild(drawRoutes)],
  exports: [RouterModule]
})
export class DrawRoutingModule { }
