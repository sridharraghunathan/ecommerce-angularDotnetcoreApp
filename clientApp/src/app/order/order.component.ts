import { OrderService } from './order.service';
import { Component, OnInit } from '@angular/core';
import { IOrder } from '../shared/models/IOrder';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders:  IOrder;

  constructor(private OrderService : OrderService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(){
    this.OrderService.getOrders().subscribe(orders => {
      this.orders = orders;
    })
  }


}
