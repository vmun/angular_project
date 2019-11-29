import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import {DrawRoutingModule} from './draw-routing.module';
import { CanvasComponent } from './canvas/canvas.component';
import { ImageListComponent } from './image-list/image-list.component';
import {MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatSliderModule} from "@angular/material";
import { ToolboxComponent } from './toolbox/toolbox.component';
import { PolygonListComponent } from './polygon-list/polygon-list.component';
import {OpacityDirective} from './directives/opacity.directive';
import {FormsModule} from "@angular/forms";
import { BrightnessDirective } from './directives/brightness.directive';



@NgModule({
  declarations: [BodyComponent, CanvasComponent, ImageListComponent, ToolboxComponent, PolygonListComponent, OpacityDirective, BrightnessDirective],
  imports: [
    CommonModule, DrawRoutingModule, MatSidenavModule, MatListModule, MatIconModule, MatMenuModule, MatSliderModule, FormsModule
  ]
})
export class DrawModule { }
