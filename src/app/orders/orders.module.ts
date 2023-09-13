import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { DemoObservableComponent } from './pages/demo-observable/demo-observable.component';
import { SharedModule } from '../shared/shared.module';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplatesModule } from '../templates/templates.module';
import { DemoObsSubjectComponent } from './pages/demo-obs-subject/demo-obs-subject.component';
import { DemoObsBehaviorSubjComponent } from './pages/demo-obs-behavior-subj/demo-obs-behavior-subj.component';



@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent,
    DemoObservableComponent,
    FormOrderComponent,
    DemoObsSubjectComponent,
    DemoObsBehaviorSubjComponent,
    ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TemplatesModule
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }
  ],
})
export class OrdersModule { }
