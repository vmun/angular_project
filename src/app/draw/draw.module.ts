import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import {DrawRoutingModule} from './draw-routing.module';
import { CanvasComponent } from './canvas/canvas.component';
import { ImageListComponent } from './image-list/image-list.component';
import {MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatSliderModule} from "@angular/material";
import { ToolboxComponent } from './toolbox/toolbox.component';
import { PolygonListComponent } from './polygon-list/polygon-list.component';



@NgModule({
  declarations: [BodyComponent, CanvasComponent, ImageListComponent, ToolboxComponent, PolygonListComponent],
  imports: [
    CommonModule, DrawRoutingModule, MatSidenavModule, MatListModule, MatIconModule, MatMenuModule, MatSliderModule
  ]
})
export class DrawModule { }
