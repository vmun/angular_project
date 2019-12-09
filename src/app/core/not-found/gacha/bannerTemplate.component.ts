import {Component, Input} from '@angular/core';

import {BannerComponent} from './Banner.component';

@Component({
  template: `
      <mat-grid-list cols="3" rowHeight="70vh">
          <mat-grid-tile>
              <h2>Error 404, {{data.name}} not found</h2></mat-grid-tile>
          <mat-grid-tile><div><img [src]="data.path" width="400"></div></mat-grid-tile>
          <mat-grid-tile><app-gacha-banner>loading</app-gacha-banner></mat-grid-tile>
      </mat-grid-list>
  `
})
export class BannerTemplateComponent implements BannerComponent {
  @Input() data: any;
}
