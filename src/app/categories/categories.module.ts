import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteComponent } from './route/route.component';
import { ListComponent } from './list/list.component';
import { BodyComponent } from './body/body.component';
import {CategoriesRoutingModule} from './categories-routing.module';
import {MatIconModule, MatListModule} from "@angular/material";



@NgModule({
  declarations: [RouteComponent, ListComponent, BodyComponent],
  imports: [
    CommonModule, CategoriesRoutingModule, MatListModule, MatIconModule
  ]
})
export class CategoriesModule { }
