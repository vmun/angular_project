import {Component} from '@angular/core';

@Component({
  selector: 'app-gacha-banner',
  template: `
      <h2>Money wasted Calculator</h2>
      <div>$$$ Spent: <input [(ngModel)]="money"></div>
      <p>You acquired: {{money | gachaErrorPipe: 70}} SSR servants</p>
      <p> You acquired: {{money | gachaErrorPipe: 13}} SR servants</p>
  `
})
export class GachaBannerComponent {
  money = 10;
}
