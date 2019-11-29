import {Component, OnInit} from '@angular/core';
import {TempDataService} from '../../shared/services/temp-data.service';
import {DataPassService} from "../../shared/services/datapass.service";

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  current = 0;

  allRoutes = this.tempData.categories;
  routes = [];

  constructor(private tempData: TempDataService, private datapassservice: DataPassService) {
    this.datapassservice.currentCategory$.subscribe((data) => {
      this.current = data;
      this.reroute();
    });
  }

  ngOnInit() {
  }

  changeCategory(id) {
    this.datapassservice.category.next(id);
  }

  reroute() {
    let n = this.current;
    const routes = [];
    while (n > 0) {
      routes.push(this.allRoutes[n]);
      n = this.allRoutes[n].parent;
    }
    routes.push(this.allRoutes[0]);
    this.routes = routes.reverse();
  }

}
