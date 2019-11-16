import { Component } from '@angular/core';
import {customAnimations} from './shared/custom-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [customAnimations]
})
export class AppComponent {
  title = 'angular';
}
