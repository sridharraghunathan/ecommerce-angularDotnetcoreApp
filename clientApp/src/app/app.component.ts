
import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';

enum AlertType {
  Success="success",
  Error="error",
  Info="info",
  Warning="warn"
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  title = 'Skinet';
  weatherObse$ =  this.basketService.weathertesting();

  constructor(private basketService : BasketService,
    private accountService :AccountService ){

  }
  ngOnInit(): void {
    this.getBasket();
    this.getCurrentUser();
    this.weatherTesting();
    this.weatherTesting();
    this.weatherTesting();

  }
  weatherTesting() {
  this.weatherObse$.subscribe(value => console.log(value));
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
