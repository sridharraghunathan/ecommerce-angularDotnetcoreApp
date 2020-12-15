import { BasketService } from './../../basket/basket.service';
import { IDeliveryMethod } from './../../shared/models/IDeliveryMethod.ts';
import { CheckoutService } from './../checkout.service';
import { Component, Input, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss']
})
export class CheckoutDeliveryComponent implements OnInit {

  @Input() checkoutForm : FormGroup
  deliveryMethod: IDeliveryMethod[] =[];

  constructor(private checkoutService : CheckoutService,
    private basketService : BasketService) { }

  ngOnInit(): void {
    this.checkoutService.getDeliveryMethod().subscribe(delivery =>{
      this.deliveryMethod = delivery;
    })
  }

  deliveryMethodCost(method: IDeliveryMethod){
    this.basketService.setShippingCost(method);
  }

}
