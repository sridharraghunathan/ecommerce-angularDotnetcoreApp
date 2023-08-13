import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/models/IOrder';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
   id : number;
   order: IOrder;
  constructor(private orderService: OrderService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getOrder(this.id);
  }

  getOrder(id: any) {
    this.orderService.getOrderById(id).subscribe(order =>{
      this.order = order;
    });
  }

}
