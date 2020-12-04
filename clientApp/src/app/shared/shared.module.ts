import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule} from 'ngx-bootstrap/pagination';
import { PaginationHeaderComponent } from './components/pagination-header/pagination-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalComponent } from './components/order-total/order-total.component';



@NgModule({
  declarations: [PaginationHeaderComponent,
     PagerComponent,
     OrderTotalComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),

  ],
  exports: [
    PaginationModule,
     PaginationHeaderComponent,
     PagerComponent,
     CarouselModule,
     OrderTotalComponent
    ] })

export class SharedModule { }
