import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  roter = 'http://localhost:4200/api';
  Object : any
  constructor(private http : HttpClient) { }

  getUser(){
    return this.http.get('http://localhost:4200/user');
  }
  // getApi(){
  //   return this.http.get('https://catfact.ninja/fact')
  // }

  addUser(user: any) {
    return this.http.post(this.roter + '/user', {user});
  }


  getForgetPws(user :any): Observable<any>{
    return  this.http.get(this.roter + '/forgot_pass');

    // return this.http.get('http://localhost:4200/user/')
  }

  // getForgetPws(url: any) : Observable<any>{
  //   return this.http.get(url);
  // }
}
