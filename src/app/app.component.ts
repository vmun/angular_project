<<<<<<< Updated upstream
import { Component } from '@angular/core';
import {customAnimations} from './shared/custom-animations';
=======
import {Component} from '@angular/core';
import {customAnimations} from './shared/animations/custom-animations';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {interval, Observable} from 'rxjs';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [customAnimations]
})
export class AppComponent {
  title = 'angular';
  loading = false;

  constructor(private router: Router) {
    // @ts-ignore
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          interval(1500)
            .subscribe(i => {
              this.loading = false;
            });
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
