import { StateOrder } from '../enums/state-order';

export interface OrderI {
  tjmHt: number;
  typePresta: string;
  nbJours: number;
  tva: number;
  state: StateOrder;
  client: string;
  comment: string;
  id: number;
  totalHT(): number;
  totalTTC(): number; 
}



