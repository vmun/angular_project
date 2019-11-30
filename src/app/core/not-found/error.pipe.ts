import {Pipe, PipeTransform} from '@angular/core';

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'gachaErrorPipe'})
export class gachaErrorPipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return Math.random() * value / (isNaN(exponent) ? 1 : exponent) ;
  }
}
