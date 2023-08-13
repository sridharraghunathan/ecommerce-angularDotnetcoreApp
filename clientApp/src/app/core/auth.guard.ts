import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../account/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService,
              private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>
    {

  // If we use the replay subject then it will wait till the data comes.
  return this.accountService.currentUser$.pipe(
     map(res => {
       // if we have any currentUser data then we are saying you are autheticated.
       if(res){
          return true;
       }
      //IF user is not authenticated the routing the login page with query params
       this.router.navigate(['account/login'],{queryParams : { returnUrl : state.url}})
     })
   )

  }

}
