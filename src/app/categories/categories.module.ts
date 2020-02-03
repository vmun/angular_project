import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteComponent } from './route/route.component';
import { ListComponent } from './list/list.component';
import { BodyComponent } from './body/body.component';
import {CategoriesRoutingModule} from './categories-routing.module';
import {MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [RouteComponent, ListComponent, BodyComponent],
  imports: [
    CommonModule, CategoriesRoutingModule, MatListModule, MatIconModule, MatGridListModule, MatFormFieldModule, FormsModule, MatInputModule
  ]
})
export class CategoriesModule { }
