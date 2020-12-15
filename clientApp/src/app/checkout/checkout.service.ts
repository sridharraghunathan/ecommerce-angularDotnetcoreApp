import { IDeliveryMethod } from './../shared/models/IDeliveryMethod.ts';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IOrder, IOrderToCreate } from '../shared/models/Iorder';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

      apiUrl = environment.apiUrl;
      constructor(private http : HttpClient) { }

        getDeliveryMethod(){
          return this.http.get<IDeliveryMethod[]>(this.apiUrl + 'order/deliveryMethods' ).pipe(
            map (deliveymthd => {
              return deliveymthd.sort((a,b) => b.price - a.price);
            })
          )
        }

        createOrder(order: IOrderToCreate){
        return this.http.post<IOrder>(this.apiUrl + 'order', order);
        }

  }
