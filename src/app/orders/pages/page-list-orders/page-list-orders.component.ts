import { Component } from '@angular/core';
import { OrdersService } from '../../service/orders.service';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent {
  // notre objectif : déclencher sumUp et afficher le résultat dans la console.

  public tab !: any ;

  public headers: string[] = [
    'Action',
    'Type',
    'Client',
    'Nb Jours',
    'Tjm Ht',
    'Total HT',
    'Total TTC',
    'Etat',
  ];
  // méthode pour calculer HT et TTC
  public total(val: number, coef: number, tva?: number){
    console.log("déclenché");
    if(tva) return val * coef * (1 + tva/100);
    return val * coef;
  }
  // ici on stocke StateOrder pour itérer dans l'HTML
  public states = Object.values(StateOrder);
  constructor(private ordersService: OrdersService, private router:Router) {
    // console.log(this.ordersService.sumUp(1, 2));

    this.ordersService.getData().subscribe((data) => {
      console.log(data); 
      this.tab=data; 
    });

  }
  public changeState(obj: Order, event: Event) {
    // console.log(obj);
    // console.log(event);
    const target = event.target as HTMLSelectElement;
    // console.log(target);
    const newState = target.value as StateOrder;
    console.log(newState);

    // Tout faire dans le service
    // créer un nouvel objet de type Order et lui affecter le newState
    // new Order(obj)
    // dans le service, .put ('url/id', obj)
    this.ordersService.changeState(obj,newState).subscribe((data) => {
      console.log(data,"après modif"); 
      // obj=data;
      Object.assign(obj,data);
    });
  }
  public goToEdit(obj: Order) {
    console.log(obj);
    // redirection avec Router
    this.router.navigate(['orders', 'edit',obj.id])
  }
}