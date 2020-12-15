import { IBasket, IBasketItem } from './../../models/Basket';
import { BasketService } from './../../../basket/basket.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
  basket$ : Observable<IBasket>;
  @Input() isBasket = true;
  @Output () increment = new EventEmitter<IBasketItem>();
  @Output () decrement = new EventEmitter<IBasketItem>();
  @Output () remove = new EventEmitter<IBasketItem>();


  constructor(private basketService : BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  decrementItemQuantity(item : IBasketItem){
      this.decrement.emit(item);
  }

  incrementItemQuantity(item  : IBasketItem){
    this.increment.emit(item);
  }

  removeBasketItem(item : IBasketItem){
    this.remove.emit(item);
  }

}
