import { Component, NgModule, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  dropdownMenu : any
  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  openPop(popUp : any){
    this.modalService.open(popUp,{
      centered : true,
      size : "md"
    })
  }
  openLoginPop(popUp : any){
    this.modalService.open(LoginComponent,{
      centered : true,
      size : "md"
    })


  }

  toggle(NavpopUp :any){
    this.modalService.open(NavpopUp,{
      centered : true,
      size : "md"
    })
  }

  // dropdwon PopUp
  dropPopUp(dropUp :any){
    this.modalService.open(dropUp,{
      centered : true,
      size : "sm"
    });

    console.log(dropUp);

  }

}
