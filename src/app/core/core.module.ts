import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from './not-found/not-found.component';
import {gachaErrorPipe} from './not-found/gacha/error.pipe';
import {GachaDirective} from './not-found/gacha/gacha.directive';
import {GachaBannerComponent} from './not-found/gacha/gachaBanner.component';
import {FormsModule} from '@angular/forms';
import {BannerTemplateComponent} from './not-found/gacha/bannerTemplate.component';
import {GachaService} from './not-found/gacha/gacha.service';
import {MainGachaComponent} from './not-found/gacha/main-gacha.component';


@NgModule({
  providers: [GachaService],
  declarations: [NotFoundComponent, gachaErrorPipe, GachaDirective, GachaBannerComponent, MainGachaComponent, BannerTemplateComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  entryComponents: [BannerTemplateComponent,],
})
export class CoreModule {
}
