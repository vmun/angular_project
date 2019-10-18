import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

  categories = [
    {id: 0, name: 'root', parent: -1},
    {id: 1, name: 'hey', parent: 0},
    {id: 2, name: 'lol', parent: 0},
    {id: 3, name: 'da', parent: 2}
    ];

  constructor() { }
}
