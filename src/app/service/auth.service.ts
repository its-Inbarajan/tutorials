import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:4200/api/userRouter'

  constructor(private http : HttpClient) {}

  getAll(){
    return this.http.get(this.apiUrl);
  }
  getByCode(code : any){
    return this.http.get(this.apiUrl+'/'+code);
  }

  getRegistraion(data :any){
    return this.http.get(this.apiUrl, data)
  }
  login(data :any){
    return this.http.get(this.apiUrl, data)
  }

}
