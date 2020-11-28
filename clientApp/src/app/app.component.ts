import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ipagination } from './models/Pagination';
import { Iproduct } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  ApiUrl = 'https://localhost:5001/api/';
  products: Iproduct[] ;
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
     this.http.get(this.ApiUrl + 'products?PageSize=50' ).subscribe((response: Ipagination) =>
     {
      this.products = response.data;
     });
  }


}
