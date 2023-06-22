import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public api : any;
  myArray = [];
  constructor(
    private modalService: NgbModal,
    public http : HttpClient,
  ){};




  ngOnInit() {
    this.getApi();
  }


 public getApi(){
      let headers = new HttpHeaders({});

      try {
        this.http.get('https://catfact.ninja/fact',{
        headers : headers
      }).subscribe(data =>{
        console.log(data);

      })
      } catch (error) {
        console.log(error);
      }

  }



}
