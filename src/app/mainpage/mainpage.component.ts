import {Component, OnInit} from '@angular/core';
import {DataPassService} from '../shared/datapass.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  logged = false;
  user: string;


  constructor(private datapassservice: DataPassService, private router: Router) {
    this.datapassservice.currentUser$.subscribe((data) => {
      this.user = data;
      if (this.user !== 'anonymous') {
        this.logged = true;
      }

    });
  }

  ngOnInit() {
  }

  logout() {
    this.datapassservice.user.next('anonymous');
    this.user = 'anonymous';
    this.logged = false;
  }

  startNow() {
    if (this.logged) {
      this.router.navigateByUrl('categories');
    } else {
      this.router.navigateByUrl('auth/login');
    }
  }
}
