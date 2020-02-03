import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BodyComponent} from './body/body.component';
import {DrawRoutingModule} from './draw-routing.module';
import { CanvasComponent } from './canvas/canvas.component';
import { ImageListComponent } from './image-list/image-list.component';
import {
  MatDialogModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule,
  MatSidenavModule,
  MatSliderModule
} from '@angular/material';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { PolygonListComponent } from './polygon-list/polygon-list.component';
import {OpacityDirective} from './directives/opacity.directive';
import {FormsModule} from '@angular/forms';
import { BrightnessDirective } from './directives/brightness.directive';
import { PolygonDialogComponent } from './polygon-dialog/polygon-dialog.component';
import {ImageResolverService} from '../shared/guards/image-resolver.service';

@NgModule({
  declarations: [BodyComponent, CanvasComponent, ImageListComponent, ToolboxComponent, PolygonListComponent, OpacityDirective, BrightnessDirective, PolygonDialogComponent],
  imports: [
    CommonModule, DrawRoutingModule, MatSidenavModule, MatListModule, MatIconModule, MatMenuModule, MatSliderModule, FormsModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatGridListModule
  ],
  entryComponents: [PolygonDialogComponent],
  providers: [ImageResolverService]
})
export class DrawModule {
}
