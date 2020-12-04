import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import {ActivatedRoute} from '@angular/router';
import { Iproduct } from '../shared/models/Product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from '../basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService,
    private basketService: BasketService
    ) { }
    product: Iproduct;
    quantity = 1;

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const param = +this.activatedRoute.snapshot.paramMap.get('id');
    this.shopService.getProduct(param).subscribe(product => {
      this.bcService.set('@productDetails', product.name );
      this.product = product;
    });
  }

  incrementQuantity(){
      this.quantity ++;
  }

  decrementQuantity(){
    if(this.quantity> 1){
      this.quantity --;
    }

  }

  addItemToBasket(){
    this.basketService.AddItemToBasket(this.product,this.quantity);
  }

}
