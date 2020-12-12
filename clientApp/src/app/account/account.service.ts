import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {  of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/models/IUser';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // Replay Subject hold single value .
  private currentUser  = new ReplaySubject<IUser>(1);
  public currentUser$ = this.currentUser.asObservable();
  APIURL = environment.apiUrl;
  
  constructor(private router : Router, private http : HttpClient) { }

  // getCurrentUser(){
  //   this.currentUser.value;
  // }

  loadCurrentUser(token:string) {
    let headers = new HttpHeaders();
      if(!token) {
        this.currentUser.next(null);
        return of(null);
      }

  headers = headers.set('Authorization',`Bearer ${token}`)
  return  this.http.get<IUser>(this.APIURL + 'account'
  ,{headers}
  ).pipe(
      map (user => this.storeUser(user))
    )
  }

  login(values : any){
 return    this.http.post<IUser>(this.APIURL + 'account/login', values).pipe(  
      map (user => this.storeUser(user))
    )
  };
  
  register(values : any){
    return    this.http.post<IUser>(this.APIURL + 'account/register', values).pipe(  
      map (user => this.storeUser(user))
    )
    };
    
    logout() {
      localStorage.removeItem('token');
      this.currentUser.next(null);
      this.router.navigateByUrl('/');
    }
    
    emailExistCheck(email :string){
    return   this.http.get<boolean>(this.APIURL + 'account/emailexists?email=' + email);
    }

    private storeUser(user: IUser)  {
      if(user){
        localStorage.setItem('token', user.token);
        this.currentUser.next(user);
      }
    };
}
