import { IOrder } from './../shared/models/IOrder';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  getOrders() {
   return  this.http.get<IOrder>(this.apiUrl + 'order');
  }

  getOrderById(id : number) {
  return  this.http.get<IOrder>(this.apiUrl + 'order/'+ id );
  }

}
