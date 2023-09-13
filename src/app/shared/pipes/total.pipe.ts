import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {
  transform(item: Order, tva?: boolean): number {
    //console.log('déclenché');

    if (tva) return item.totalTTC();
    return item.totalHT();
  }
}

