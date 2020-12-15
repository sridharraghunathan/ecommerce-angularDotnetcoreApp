import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

const routes: Routes = [
  { path : '' , component : CheckoutComponent },
  { path : 'success', component : CheckoutSuccessComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class CheckoutRoutingModule { }
