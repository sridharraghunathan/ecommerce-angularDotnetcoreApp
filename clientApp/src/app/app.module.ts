import { JWTInterceptor } from './core/error/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { NgxSpinnerModule } from 'ngx-spinner';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

import { ErrorInterceptor } from './core/error/error.interceptor';
import { LoadingInterceptor } from './core/error/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    NgxSpinnerModule,
    HomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,  useClass : ErrorInterceptor,   multi: true },
    { provide: HTTP_INTERCEPTORS,  useClass : LoadingInterceptor, multi: true },
    { provide : HTTP_INTERCEPTORS, useClass : JWTInterceptor,     multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
