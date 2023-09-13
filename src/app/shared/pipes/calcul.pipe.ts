import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcul'
})
export class CalculPipe implements PipeTransform {

  transform(val: number, tva: number): number {
    console.log('calcul déclenché');

    return val *  (1 + tva / 100);

  }

}
