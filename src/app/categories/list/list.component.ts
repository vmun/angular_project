import {Component, OnInit} from '@angular/core';
import {TempDataService} from '../../shared/temp-data.service';
import {DataPassService} from '../../shared/datapass.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  current = 0;

  categories = this.tempData.categories;
  childs = [];

  constructor(private tempData: TempDataService, private datapassservice: DataPassService) {
    this.datapassservice.currentCategory$.subscribe((data) => {
      this.current = data;
      this.getChilds();
    });
  }

  ngOnInit() {
  }

  changeCategory(index) {
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
