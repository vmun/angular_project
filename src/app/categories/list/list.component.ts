import {Component, OnInit} from '@angular/core';
import {TempDataService} from '../../shared/temp-data.service';
import {DataPassService} from '../../shared/datapass.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  current = 0;

  categories = this.tempData.categories;
  childs = [];

  constructor(private tempData: TempDataService, private datapassservice: DataPassService, private router: Router) {
    this.datapassservice.currentCategory$.subscribe((data) => {
      this.current = data;
      this.getChilds();
    });
  }

  ngOnInit() {
    this.current = 0;
    this.changeCategory(0);
  }

  changeCategory(index) {
    const currentCat = this.categories.find(cat => cat.id === index);
    if (currentCat.endpoint === true) {
      this.router.navigateByUrl('categories/' + currentCat.id + '/draw');
      return;
    }
    this.datapassservice.category.next(index);
  }

  getChilds() {
    const childs = [];
    for (const cat of this.categories) {
      if (cat.parent === this.current) {
        childs.push(cat);
      }
    }
    this.childs = childs;
  }

}
