import {v4 as uuid} from 'uuid'
export interface IBasket {
    id: string;
    items: IBasketItem[];
  }

export   interface IBasketItem {
    id: number;
    brand: string;
    type: string;
    price: number;
    productName: string;
    pictureUrl: string;
    quantity: number;
  }

export class Basket implements IBasket{
    id: string = uuid();
    items: IBasketItem[]= [];
}

export interface IBasketTotal{
  shipping : number;
  subTotal : number;
  total : number;
}
