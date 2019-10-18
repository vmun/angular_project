import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteComponent } from './route/route.component';
import { ListComponent } from './list/list.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [RouteComponent, ListComponent, BodyComponent],
  imports: [
    CommonModule
  ]
})
export class CategoriesModule { }
