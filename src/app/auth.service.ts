import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) { }

  public isLoggedIn(): boolean{
    let token = localStorage.getItem('token');

    // if(token) return !this.jwtHelper.isTokenExpired(token);
    // return false;
    let isExpired = this.jwtHelper.isTokenExpired(token as string);
    console.log('isLoggedIn', !isExpired);
    return !isExpired;
  }

  public login(credentials: any): Observable<boolean>{
     return this.http.post('api/authenticate', 
      JSON.stringify(credentials))
        .pipe(
          map((result: any) => {
              console.log('map is called', result.token);

              if (result && result.token){
                 localStorage.setItem('token', result.token);
                  return true;
              }
              return false;
          })
        )
   } 

   public logout(){
     localStorage.removeItem('token');
   }
}
