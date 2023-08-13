import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from '../shared/models/Basket';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket$: Observable<IBasket>;

  constructor(private basketService : BasketService) { }

  ngOnInit(): void {
    console.log('basketcomponent');
    this.basket$ = this.basketService.basket$;

    this.basketService.basket$.subscribe((value)=>{
      console.log(value);
    })
  }

  incrementItemQuantity(item: IBasketItem){
    this.basketService.incrementQuantity(item);
  }

  decrementItemQuantity(item: IBasketItem){
    this.basketService.decrementQuantity(item);
  }

  removeBasketItem(item: IBasketItem){
    this.basketService.removeItemBasket(item);
  }
}
