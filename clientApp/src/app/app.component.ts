
import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Skinet';

  constructor(private basketService : BasketService, 
    private accountService :AccountService ){

  }
  ngOnInit(): void {
    this.getBasket();
    this.getCurrentUser();
  }

  getBasket(){
    const basketId = localStorage.getItem('basketId')
    this.basketService.getBasket(basketId).subscribe(resp =>{
      console.log('Intialiased the Basket');
    },
    error =>{
      console.log(error)
    });
  }

  getCurrentUser(){
    const token = localStorage.getItem('token');
       this.accountService.loadCurrentUser(token).subscribe(()=>{
        console.log('current User Intialized');
      },
      error =>{
        console.log(error);
      });
    }
}
