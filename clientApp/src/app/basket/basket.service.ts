import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Basket, IBasket, IBasketItem, IBasketTotal } from '../shared/models/Basket';
import { Iproduct } from '../shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  apiUrl = environment.apiUrl;
  private basketSource = new BehaviorSubject<IBasket>(null);
  public basket$ = this.basketSource.asObservable();

  private basketTotalSource = new BehaviorSubject<IBasketTotal>(null);
  public  basketTotal$ = this.basketTotalSource.asObservable();

  constructor(private http :HttpClient) { }

  getBasket(id: string ){
    return this.http.get<IBasket>(this.apiUrl + 'basket?id='+ id)
    .pipe(
      map(basket =>{
        this.basketSource.next(basket);
        this.calculateTotal();
      } )
    );
  }

  setBasket (basket: IBasket){
    this.http.post<IBasket>(this.apiUrl + 'basket', basket)
    .subscribe(basket =>{
      this.basketSource.next(basket);
      this.calculateTotal();
    },
    error => {
      console.log(error);
    })
  }

  getCurrentBasketValue(){
    return this.basketSource.value;
  }

  AddItemToBasket(product : Iproduct, quantity : number = 1){
     //get the product and quantity .
    let itemToAdd : IBasketItem = this.mappingProductToItem(product,quantity);
    //Intialize the new basket for the customer if not there else use the exising basket to add.
    console.log(this.getCurrentBasketValue());
  //  const basket = this.getCurrentBasketValue() ?? this.createBasket();
  let basket = this.getCurrentBasketValue();
    if (basket === null) {
      basket = this.createBasket();
    }
    //Add the item to the basket or update the item in the basket.
     basket.items =  this.AddOrUpdateItem(basket.items, itemToAdd, quantity);
     //Calling the Http Method for persisting the data
     this.setBasket(basket);
  }

  AddOrUpdateItem(items : IBasketItem[], itemToAdd : IBasketItem, quantity : number) : IBasketItem[] {
     // To Add the Item to as new element check if the item already exist or not
     console.log(items,itemToAdd);
     const index = items.findIndex( basket => basket.id === itemToAdd.id);
     //Not Found then add the record to exising array
     if( index === -1 ) 
     {
       itemToAdd.quantity = quantity;
        items.push(itemToAdd);
        console.log(items);
     }
     else{
       items[index].quantity += quantity; 
     }

     return items;

  }
 
  createBasket (){
    let basket = new Basket();
    localStorage.setItem('basketId', basket.id);
    return basket;
  }

  mappingProductToItem (product : Iproduct, quantity : number){
    return {
       id : product.id,
       productName :product.name,
       brand : product.productBrand,
       type :product.productType,
       pictureUrl :product.pictureUrl,
       quantity ,
       price : product.price
    }
  }

  calculateTotal(){
    const shipping  = 0;
    const basket = this.getCurrentBasketValue();
    const subTotal =  basket.items.reduce((sum,current)=> (current.price * current.quantity) + sum , 0);
    const total = shipping + subTotal;
    this.basketTotalSource.next({shipping,subTotal,total});
  }

  incrementQuantity(item : IBasketItem ){
    //Incrementing the quantity
    const basket = this.getCurrentBasketValue();
    const findItem = basket.items.findIndex( it => it.id == item.id );
    basket.items[findItem].quantity ++;
    this.setBasket(basket);
  }

  decrementQuantity(item : IBasketItem){
    const basket = this.getCurrentBasketValue();
    const findItem = basket.items.findIndex( it => it.id == item.id );
      // Check the item to decrement is having quantity already morethan >1
      // then remove the item and update in the DB
    if (basket.items[findItem].quantity > 1 ){
     basket.items[findItem].quantity --;
      this.setBasket(basket);
    }
    //If already having one quqanity then we need to remove the item itself from the array.

    else{
      this.removeItemBasket(item);
    }

  }
  
  removeItemBasket(item : IBasketItem) {
    // Instead of removing the arrary exlclude and override the array.
    const basket = this.getCurrentBasketValue();
    if (basket.items.some(x => x.id == item.id)){
      basket.items = basket.items.filter( it => it.id !== item.id);
// after excluding the array check nothing is there in array or not 
// nothing is there then remove the basket completely
// clear the data in local storage.
      if(basket.items.length> 0){
        this.setBasket(basket);
      }
      else{
        this.deleteBasket(basket);
      }
    }
  }

  deleteBasket(basket:IBasket) {
    this.http.delete(this.apiUrl + 'basket?id='+ basket.id).subscribe(
      (Response)=>{
        this.basketSource.next(null);
        this.basketTotalSource.next(null);
        localStorage.removeItem('basketId');
      },
      (error)=>{
        console.log(error);
      }
    );
  }



}
