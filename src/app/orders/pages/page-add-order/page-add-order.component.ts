import { Component } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent {
  public init : Order = new Order ();
  constructor(private ordersService: OrdersService, private router: Router) {}
  public onAdd(obj: Order) {
    // console.log(obj, 'depuis page add order');
    // faire un appel http en méthode post avec obj
    this.ordersService.add(obj).subscribe((data) => {
      // redirection
      this.router.navigate(['']);
    });

    // Redirection écrite ici trop tôt !
  }
  }
