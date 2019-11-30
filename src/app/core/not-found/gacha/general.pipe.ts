import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'GeneralPipe'})
export class generalPipe implements PipeTransform {
  transform(value: string,) {
    return 'this word was stolen ';
  }
}
