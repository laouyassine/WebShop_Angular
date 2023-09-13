import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './home/pages/page-home/page-home.component';
import { PageEditOrderComponent } from './orders/pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './orders/pages/page-add-order/page-add-order.component';
import { PageNotFoundComponent } from './errors/pages/page-not-found/page-not-found.component';
import { ClientModule } from './client/client.module';

const routes: Routes = [
  // 1 - redirection
  // associer une route à une autre route
  // '', il va aller sur la route 'orders'
  { path: '', redirectTo: '/orders', pathMatch: 'full' },

  // 2 - route orders , on va lui associer un module
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  // ajouter le module en lazy loading
  // dans le module Errors, ajouter le fichier de routing
  // vérifier dans Network le chargement du module

  {
    path: 'clients',
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./errors/errors.module').then((m) => m.ErrorsModule),
  },


  // ajouter le module lazy loading pour le module client
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
