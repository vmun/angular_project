import {Component, OnInit} from '@angular/core';
import {DataPassService} from '../../shared/services/datapass.service';
import {Router} from '@angular/router';
import {ChartType} from 'chart.js';

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
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  ngOnInit() {
  }

  logout() {
    this.datapassservice.user.next('anonymous');
    this.user = 'anonymous';
    this.logged = false;
    localStorage.clear();
  }

}
