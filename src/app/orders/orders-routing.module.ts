import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { DemoObservableComponent } from './pages/demo-observable/demo-observable.component';
import { DemoObsSubjectComponent } from './pages/demo-obs-subject/demo-obs-subject.component';
import { DemoObsBehaviorSubjComponent } from './pages/demo-obs-behavior-subj/demo-obs-behavior-subj.component';

const routes: Routes = [
   {path: '', component: PageListOrdersComponent},
  {path: 'add', component: PageAddOrderComponent},
  {path: 'edit/:id', component: PageEditOrderComponent},
  {path: 'obs', component: DemoObservableComponent},
  {path: 'obs-subject', component: DemoObsSubjectComponent},
  { path: 'obs-behavior-subject', component: DemoObsBehaviorSubjComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {

 }