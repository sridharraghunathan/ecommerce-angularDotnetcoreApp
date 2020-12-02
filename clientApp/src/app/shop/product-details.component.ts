import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import {ActivatedRoute} from '@angular/router';
import { Iproduct } from '../shared/models/Product';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService
    ) { }

    product: Iproduct;

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
}
