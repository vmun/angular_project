import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';
import {gachaErrorPipe} from './not-found/error.pipe';
import {GachaDirective} from './not-found/gacha.directive';
import {GachaBannerComponent} from './not-found/gachaBanner.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [NotFoundComponent, gachaErrorPipe, GachaDirective, GachaBannerComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CoreModule {
}
