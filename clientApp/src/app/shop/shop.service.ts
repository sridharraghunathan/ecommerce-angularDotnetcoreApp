import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrand } from '../shared/models/Brand';
import { Ipagination } from '../shared/models/Pagination';
import { IType } from '../shared/models/ProductType';
import {map} from 'rxjs/operators';
import { ShopParams } from '../shared/models/ShopParams';
import { Iproduct } from '../shared/models/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService  {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getProducts( shopParams: ShopParams): Observable<Ipagination> {

    let params = new HttpParams();
    if ( shopParams.brandId ) {
      params =  params.append('brandId', shopParams.brandId.toString());
    }
    if ( shopParams.typeId ) {
      params =  params.append('typeId', shopParams.typeId.toString());
    }
    params = params.append('sort', shopParams.sort);
    params = params.append('pageSize', shopParams.pageSize.toString());
    params = params.append('pageIndex', shopParams.pageIndex.toString());

    if ( shopParams.search ) {
        params = params.append('search', shopParams.search.toString());
    }

    return this.http.get<Ipagination>(this.baseUrl + 'products' ,
    {
      params, observe : 'response'    })
    .pipe
    ( map (response => {
         return response.body;  }));
  }

getProduct(id: number): Observable<Iproduct> {
  return this.http.get<Iproduct>(this.baseUrl + 'products/' + id);
}

  getBrands(): Observable<IBrand[]> {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes(): Observable<IType[]> {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }

}
