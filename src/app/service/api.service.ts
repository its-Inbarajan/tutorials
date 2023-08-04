import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  roter = '/api';
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


  getForgetPws(user:any){
    return  this.http.post(this.roter + '/forgor_pass' ,{user})

    // return this.http.get('http://localhost:4200/user/')

  }
}
