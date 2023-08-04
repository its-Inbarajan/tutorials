import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
 public api : any;
  myArray = [];

  // items: any[] = []; // Array to store the items
  // isFetching: boolean = false; // Flag to prevent multiple API calls


  constructor(
    private modalService: NgbModal,
    public http : HttpClient,
    // private elementRef: ElementRef
  ){};




  ngOnInit() {
    // this.getApi();
    // this.fetchItems();
  }

  // @HostListener('window:scroll', [])
  // onScroll(): void {
  //   const container = this.elementRef.nativeElement;
  //   const scrollTop = container.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
  //   const scrollHeight = container.scrollHeight || document.documentElement.scrollHeight || document.body.scrollHeight;
  //   const clientHeight = container.clientHeight || document.documentElement.clientHeight || document.body.clientHeight;

  //   if (scrollTop + clientHeight >= scrollHeight && !this.isFetching) {
  //     this.fetchItems();
  //   }
  // }


  // fetchItems(): void {
  //   this.isFetching = true;
  //   // Make an API call to fetch the next batch of items
  //   // Append the new items to the existing array
  //   // Set isFetching to false when the API call is complete
  // }

//  public getApi(){
//       let headers = new HttpHeaders({});


//         this.http.get('https://catfact.ninja/fact',{
//         headers : headers
//       }).subscribe(data =>{
//         console.log(data);

//       })
//   }



}
