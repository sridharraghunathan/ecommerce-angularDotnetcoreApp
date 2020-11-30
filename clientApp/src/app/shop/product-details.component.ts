import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import {ActivatedRoute} from '@angular/router';
import { Iproduct } from '../shared/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute
    ) { }

    product: Iproduct;

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const param = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(param);
    this.shopService.getProduct(param).subscribe(product => {

      this.product = product;
    });
  }
}
