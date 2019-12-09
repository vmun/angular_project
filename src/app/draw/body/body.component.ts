import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../shared/services/provider.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private provider: ProviderService) {
  }

  labels = [];

  ngOnInit() {
    this.provider.getLabels().then(res => {
      console.log(res);
      this.labels = res;
    });
  }

}
