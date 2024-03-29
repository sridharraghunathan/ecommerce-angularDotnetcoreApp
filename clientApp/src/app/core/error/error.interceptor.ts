import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

                                                      @Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private toastr: ToastrService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError ((error: any) => {
        if (error ) {
           // internal server error which is code running got break
           if (error.status === 500){
            /* Passing the Error information via router */
            const navigationExtras: NavigationExtras = {state : {error : error.error}};
            this.router.navigateByUrl('server-error', navigationExtras);
           }
          // no data received or not found
           if ( error.status === 404){
            this.router.navigateByUrl('not-found');
          }
          // Bad request
           if ( error.status === 400 ){

            if (error.error.errors){
              throw (error.error) ; // throw to place where it occured.

            } else {
              this.toastr.error ( error.error.message, error.error.statusCode );
            }
          }

          // Authorisation issues
           if ( error.status === 401 ){
           this.toastr.error ( error.error.message, error.error.statusCode );
        }

         // Generic Error
          if(error.status === 0){
            this.toastr.error('Services May be down,Try Again Later', null )
          }

        }
        return throwError(error);  // for showing to console.
      })
    );
  }
}
