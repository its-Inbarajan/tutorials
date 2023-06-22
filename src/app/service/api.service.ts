import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  Object : any
constructor(private http : HttpClient) { }


  // getApi(){
  //   return this.http.get('https://catfact.ninja/fact')
  // }
}
