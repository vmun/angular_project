import {Component, OnInit} from '@angular/core';
import {TempDataService} from '../../shared/services/temp-data.service';
import {DataPassService} from "../../shared/services/datapass.service";
import {SubFolder} from '../../shared/models/models';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  current: SubFolder;

  allRoutes = this.tempData.categories;
  routes = [{id: 0, name: 'Categories'}];

  constructor(private tempData: TempDataService, private datapassservice: DataPassService) {
    this.datapassservice.currentRoute$.subscribe((data) => {
      this.current = data;
      this.rerouteUp(data);
    });
  }

  ngOnInit() {
  }

  changeCategory(i) {
    this.rerouteDown(i);
    this.datapassservice.category.next(this.routes[i]);
  }

  rerouteUp(route) {
    this.routes.push(route);

    // let folder = this.current;
    // const routes = [];
    // while (folder.parent) {
    //   routes.push(this.allRoutes[folder.p]);
    //   n = this.allRoutes[n].parent;
    // }
    // routes.push(this.allRoutes[0]);
    // this.routes = routes.reverse();
  }

  rerouteDown(index) {
    while (this.routes[this.routes.length - 1].id !== this.routes[index].id) {
      this.routes.pop();
    }
  }

}
