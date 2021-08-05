import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';

const result = {value: 'hello there'};
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1KIE9ybWl0YSIsImlhdCI6MTUxNjIzOTAyMn0.Foh10gKeDLxkM0jMH1RZoVKrHFTAYEbDXEbQgAqzN_U";
@Injectable({
  providedIn: 'root'
})
export class BackendInterceptorService implements HttpInterceptor{

  constructor() { 

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log('intercepted');
    let response = of(new HttpResponse({status:200, body: {token: token}}));
    console.log('response', response);
    return response;
  }

}
