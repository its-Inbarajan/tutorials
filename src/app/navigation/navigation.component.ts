import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { LoginComponent } from '../login/login.component';




@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',

  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  public modalReference : any
  constructor (
    private modalService: NgbModal,
    ) { }

  ngOnInit() {

  }


  //drop down
  open(dropdown : any){
    dropdown.openMenu()
  }

  openModal(){
    this.modalReference = this.modalService.open(LoginComponent,{
      size : 'md',
      centered: true
    })
  }
  public openModalSearch(openPop :any){
    this.modalReference = this.modalService.open(openPop,{
      size : 'md',
      centered: true
    })
  }
}
