import {Component, OnInit} from '@angular/core';
import {TempDataService} from '../../shared/services/temp-data.service';
import {DataPassService} from '../../shared/services/datapass.service';
import {Router} from '@angular/router';
import {ProviderService} from '../../shared/services/provider.service';
import {Folder, ImagePack, SubFolder} from '../../shared/models/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  current = 0;

  categories: Folder[] = [];
  folders: Folder[] = [];
  packs: ImagePack[] = [];
  childs: Folder[] = [];

  constructor(private tempData: TempDataService,
              private datapassservice: DataPassService,
              private provider: ProviderService,
              private router: Router) {
    this.datapassservice.currentCategory$.subscribe((data) => {
      if (data.id === 0) {
        this.childs = [];
        this.current = 0;
        for (const cat of this.categories) {
          if (!cat.parent) {
            this.childs.push(cat);
          }
        }
      } else {
        this.reroute(data);
      }
      // this.changeCategory(data);
      // this.getChilds();
    });
  }

  ngOnInit() {
    this.childs = [];
    this.provider.getAllowedFolders().then(folders => {
      for (const folder of folders) {
        folder.className = 'Folder';
      }
      this.folders = folders;
      this.provider.getAllowedImagePacks().then(packs => {
        for (const pack of packs) {
          pack.className = 'ImagePack';
        }
        this.packs = packs;
        this.categories = this.folders.concat(packs);
        this.current = 0;
        for (const cat of this.categories) {
          if (!cat.parent) {
            this.childs.push(cat);
          }
        }
      });
    });
  }

  changeCategory(current: Folder) {
    if (current.className === 'ImagePack') {
      this.router.navigateByUrl('categories/' + current.id + '/draw');
      return;
    } else {
      this.childs = [];
      this.datapassservice.route.next(current);
      this.current = current.id;
      this.childs = this.getChilds();
    }
  }

  reroute(cat) {
    this.current = cat.id;
    this.childs = this.getChilds();
  }

  getChilds() {
    const childs = [];
    for (const cat of this.categories) {
      if (cat.parent === this.current) {
        childs.push(cat);
      }
    }
    return childs;
  }

}
