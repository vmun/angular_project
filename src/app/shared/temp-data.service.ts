import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

  categories = [
    {id: 0, name: 'Categories', parent: -1, endpoint: false},
    {id: 1, name: 'hey', parent: 0, endpoint: false},
    {id: 2, name: 'lol', parent: 0, endpoint: false},
    {id: 3, name: 'da', parent: 2, endpoint: true}
    ];

  images = [
    {id: 0, name: 'im0'},
    {id: 1, name: 'im1'},
    {id: 2, name: 'im2'},
    {id: 3, name: 'im3'},
    {id: 4, name: 'im4'},
    {id: 5, name: 'im5'},
  ];

  imagesFull = [
    {id: 0, name: 'im0', url: 'https://sun9-22.userapi.com/c851128/v851128178/27e53/IKX3sudBnIs.jpg'},
    {id: 1, name: 'im1', url: 'https://sun9-12.userapi.com/c845016/v845016776/cdca8/gp_TC70GdsI.jpg'},
    {id: 2, name: 'im2', url: 'https://sun9-13.userapi.com/c543105/v543105892/3ad72/kcxgrNAFdSI.jpg'},
    {id: 3, name: 'im3', url: 'https://sun9-61.userapi.com/c7002/v7002038/760de/Yk5QXSBFePQ.jpg'},
    {id: 4, name: 'im4', url: 'https://sun9-22.userapi.com/c851128/v851128178/27e53/IKX3sudBnIs.jpg'},
    {id: 5, name: 'im5', url: 'https://sun9-22.userapi.com/c851128/v851128178/27e53/IKX3sudBnIs.jpg'},
  ];

  constructor() { }
}
