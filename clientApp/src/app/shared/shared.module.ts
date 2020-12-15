import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule} from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PagerComponent } from './components/pager/pager.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {CdkStepperModule} from '@angular/cdk/stepper';

import { PaginationHeaderComponent } from './components/pagination-header/pagination-header.component';
import { OrderTotalComponent } from './components/order-total/order-total.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';



@NgModule({
  declarations: [PaginationHeaderComponent,
     PagerComponent,
     OrderTotalComponent,
     TextInputComponent,
     StepperComponent,
     BasketSummaryComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    CdkStepperModule,
    RouterModule

  ],
  exports: [
    PaginationModule,
    CarouselModule,
    BsDropdownModule,
    ReactiveFormsModule,
    PagerComponent,
    PaginationHeaderComponent,
    OrderTotalComponent,
    TextInputComponent,
    StepperComponent,
    CdkStepperModule,
    BasketSummaryComponent
    ] })

export class SharedModule { }
