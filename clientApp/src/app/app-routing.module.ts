import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from './core/auth.guard';


const routes: Routes = [
  {path : '' , component : HomeComponent, data :{breadcrumb : 'Home'}},
  {path : 'test-error', component : TestErrorComponent, data: { breadcrumb: 'test-error'}},
  {path : 'server-error', component : ServerErrorComponent, data: { breadcrumb: 'server-error'}},
  {path : 'not-found', component : NotFoundComponent, data: { breadcrumb: 'not-found'}},
  {path : 'shop',
  loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) ,
   data :{ breadcrumb : 'Shop'}},

   {path : 'basket',
    loadChildren :() => import ('./basket/basket.module').then( m => m.BasketModule),
  data :{ breadcrumb : 'Basket'}},

  {path : 'checkout', canActivate : [AuthGuard]  ,
  loadChildren :() => import ('./checkout/checkout.module').then( m => m.CheckoutModule),
  data :{ breadcrumb : 'Checkout'}},

  { path : 'account',
  loadChildren :() => import('./account/account.module').then( m => m.AccountModule),
  data : { skip : true }
  },

  {path : 'orders', canActivate : [AuthGuard]  ,
  loadChildren :() => import ('./order/order.module').then( m => m.OrderModule),
  data :{ breadcrumb : 'Order'}},

  {path : '**' , redirectTo : 'not-found', pathMatch  : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
