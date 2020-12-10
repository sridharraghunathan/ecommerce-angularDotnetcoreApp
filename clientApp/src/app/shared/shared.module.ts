import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule} from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationHeaderComponent } from './components/pagination-header/pagination-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OrderTotalComponent } from './components/order-total/order-total.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';



@NgModule({
  declarations: [PaginationHeaderComponent,
     PagerComponent,
     OrderTotalComponent,
     TextInputComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule

  ],
  exports: [
    PaginationModule,
    CarouselModule,
    BsDropdownModule,
    ReactiveFormsModule,
    PagerComponent,
    PaginationHeaderComponent,
     OrderTotalComponent,
     TextInputComponent
    ] })

export class SharedModule { }
