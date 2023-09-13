import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  tjmHt = 1200;
  typePresta!: string;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  client!: string;
  comment!: string;
  id!: number;
  totalHT(): number {
    return this.tjmHt * this.nbJours;
  }
  totalTTC(): number {
    return this.tjmHt * this.nbJours * (1 + this.tva / 100);
  }
  constructor(obj?: Partial<Order>) {
    if (obj) {
      // this
      Object.assign(this, obj);
    }
  }
}