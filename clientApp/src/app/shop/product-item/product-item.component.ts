import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { Iproduct } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
@Input() product: Iproduct;

  constructor(private basketService :BasketService) { }

  ngOnInit(): void {

  }

  AddToCart(){

    this.basketService.AddItemToBasket(this.product);
  }
}
