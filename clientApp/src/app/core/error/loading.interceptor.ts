import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { BusyService } from '../service/busy.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor{
  constructor(private busyService: BusyService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this will show the loading state.
    this.busyService.busy();
    return next.handle(req).pipe(
      delay(1000),
      finalize(() => {
        this.busyService.idle();
    }));
  }
}
