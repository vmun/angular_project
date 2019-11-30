import {Component, Input} from '@angular/core';

import {BannerComponent} from './Banner.component';

@Component({
  template: `
      <div class="row" style="align-content: space-evenly">
          <h2>Error 404, {{data.Name}} not found</h2>
          <br>
          <div><img [src]="data.Path" width="400"></div>
          <app-gacha-banner>loading</app-gacha-banner>
      </div>
  `
})
export class BannerTemplateComponent implements BannerComponent {
  @Input() data: any;
}
