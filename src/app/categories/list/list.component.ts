import {Component, OnInit} from '@angular/core';
import {TempDataService} from '../../shared/services/temp-data.service';
import {DataPassService} from '../../shared/services/datapass.service';
import {Router} from '@angular/router';
import {ProviderService} from '../../shared/services/provider.service';
import {Folder, SubFolder} from '../../shared/models/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  current = 0;

  categories: SubFolder[];
  // childs = [];

  constructor(private tempData: TempDataService,
              private datapassservice: DataPassService,
              private provider: ProviderService,
              private router: Router) {
    this.datapassservice.currentCategory$.subscribe((data) => {
      if (data.id === 0) {
        this.ngOnInit();
      } else {
        this.reroute(data.id);
      }
      // this.changeCategory(data);
      // this.getChilds();
    });
  }

  ngOnInit() {
    this.provider.getRootFolders().then(res => {
      this.categories = res;
      this.current = 0;
      // this.changeCategory(0);
    });
  }

  changeCategory(index) {
    const currentCat = this.categories.find(cat => cat.id === index);
    if (currentCat.type === 6) {
      this.router.navigateByUrl('categories/' + currentCat.id + '/draw');
      return;
    } else {
      this.categories = [];
      this.datapassservice.route.next(currentCat);
      this.provider.getSubFolders(index).then(res => {
        this.categories = res.allowed;
        this.current = index;
      });
    }
  }

  reroute(index) {
    this.categories = [];
    this.provider.getSubFolders(index).then(res => {
      this.categories = res.allowed;
      this.current = index;
    });
  }

  getChilds() {
    // const childs = [];
    // for (const cat of this.categories) {
    //   if (cat.parent === this.current) {
    //     childs.push(cat);
    //   }
    // }
    // this.childs = childs;
  }

}
