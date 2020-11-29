import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IBrand } from '../shared/models/Brand';
import { Iproduct } from '../shared/models/Product';
import { IType } from '../shared/models/ProductType';
import { ShopService } from './shop.service';
import {ShopParams} from '../shared/models/ShopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
@ViewChild('search', {static : true}) searchTerm: ElementRef;
  products: Iproduct[];
  brands: IBrand[];
  types: IType[];
  count: number ;

  shopParams = new ShopParams();

  sortOptions = [
      {name: 'Alphabetical', value: 'name'},
      {name: 'Price Low to High', value: 'priceAsc'},
      {name: 'Price High to Low', value: 'priceDesc'}];

  constructor( private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(): void{
    this.shopService.getProducts(
      this.shopParams).subscribe((response) => {
      this.products = response.data;
      this.count = response.count;
      this.shopParams.pageIndex = response.pageIndex;
      this.shopParams.pageSize = response.pageSize;
    });
  }


  getBrands(): void{
    this.shopService.getBrands().subscribe((brands) => {
      this.brands = [{id: 0, name: 'All' }, ...brands] ;
    });
  }

  getTypes(): void{
    this.shopService.getTypes().subscribe((types) => {
      this.types = [{id: 0, name: 'All' }, ...types] ;
    });
  }

  onBrandIdSelected(brandId: number): void{
    this.shopParams.brandId = brandId;
    this.shopParams.pageIndex = 1;
    this.getProducts();
  }

  onTypeIdSelected(typeId: number): void{
    this.shopParams.typeId = typeId;
    this.shopParams.pageIndex = 1;
    this.getProducts();
  }

  onSortSelected(sort: string): void{
    this.shopParams.sort = sort;
    this.getProducts();
  }

  onPageChanged(event: any): void{
   if ( this.shopParams.pageIndex !== event  ) {
    this.shopParams.pageIndex = event ;
    this.getProducts();
   }

  }

  onSearch(): void {

   this.shopParams.search = this.searchTerm.nativeElement.value ;
   this.shopParams.pageIndex = 1;
   this.getProducts();
  }

  onReset(): void {
    this.searchTerm.nativeElement.value = '';
    this.shopParams = new ShopParams();
    this.getProducts();
  }

}
