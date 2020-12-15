import { CheckoutService } from './../checkout.service';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/basket/basket.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IOrderToCreate , IOrder} from 'src/app/shared/models/Iorder';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit {
  @Input() checkoutForm : FormGroup;

  constructor( private basketService : BasketService ,
     private toastrService : ToastrService,
     private checkoutService : CheckoutService,
     private router : Router
     ) { }

  ngOnInit(): void {
  }


  submitOrder(){
          const basket  = this.basketService.getCurrentBasketValue() ;
          const createToOrder : IOrderToCreate = {
            basketId : basket.id ,
            deliveryMethodId : +this.checkoutForm.get('deliveryForm').get ('deliveryMethod').value,
            shipToAddress : this.checkoutForm.get('addressForm').value
        };

          this.checkoutService.createOrder(createToOrder)
          .subscribe( (order : IOrder) =>{
            this.basketService.deleteLocalBasket();
            this.toastrService.success('Your Order has been Placed!!!');
            const navigationExtras : NavigationExtras = {state: order};
            this.router.navigate(['checkout/success'], navigationExtras);
          },
          error =>{
            this.toastrService.error(error.message);
            console.log(error);
          });
  }
}
