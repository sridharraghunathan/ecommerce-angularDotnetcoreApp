import { OrderRoutingModule } from './order-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  declarations: [OrderComponent, OrderDetailComponent ],
  imports: [
    CommonModule,
    RouterModule,
    OrderRoutingModule
  ]
})
export class OrderModule {

}
