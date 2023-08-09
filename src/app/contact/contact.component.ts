import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxMailtoService, Mailto } from 'ngx-mailto';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {

  email : string[] = ['rajaninba6@gmail.com'];
  cc : string[] = [];
  bcc : string[] = [];
  subject : string[] = [];
  body : string[] = [];
  public contactForm !: FormGroup

  mailto: Mailto = {
    receiver: this.email,
    cc: this.cc,
    bcc: this.bcc,
    subject: undefined,
    body: undefined
  };
  constructor(
    public mailtoService : NgxMailtoService,
    public formBulider : FormBuilder,
    private toastr: ToastrService,
    public service : AuthService,
    ) { }

  ngOnInit() {
    this.contactForm = this.formBulider.group({
      name : [''],
      email : [''],
      message : ['']
    })


  }

  open(){
    this.mailtoService.open(this.mailto)
  }

   public submitAction(){
    if(this.contactForm.status === 'VALID'){
      this.toastr.success('Sending Scuessfull');
    }else{
      this.toastr.warning('Contact field required')
    }
  }

}
