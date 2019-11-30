import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-gacha-banner',
  template: `
      <h2>But do not despair! Behold, our new:</h2>
      <h2>Money wasted Calculator</h2>
      <div>$$$ Spent: <input [(ngModel)]="money"></div>
      <p>You acquired: {{money | gachaErrorPipe: 70}} SSR waifus</p>
      <p> You acquired: {{money | gachaErrorPipe: 20}} SR waifus</p>
      <p> You acquired: {{money | gachaErrorPipe: 5}} R waifus</p>
  `
})
export class GachaBannerComponent {
  money = 10;
}
