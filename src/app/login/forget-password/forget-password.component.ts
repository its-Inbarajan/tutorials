import { VariableBinding } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm !: FormGroup;
  user : any =[{}]
  // subscription = new Subscription();
  // url = 'http://localhost:4200/api'
  // userData: any = [{}];
  constructor(
    public fb : FormBuilder,
    public modalService: NgbModal,
    public activeModal: NgbActiveModal,
    public toastr: ToastrService,
    public service : AuthService,
    public router : Router,
    public apiService : ApiService
  ) { }

  ngOnInit() {
    this.forgetPasswordForm = this.fb.group({
      oldPassword : [],
      newPassword :[],
      confirmPassowrd :[]
  });
  }


  // matchPassword : ValidatorFn = (control : AbstractControl):ValidationErrors | null => {

  //   let password = control.get('newPassword');

  //   let confirmPassowrd = control.get('confirmPassword');

  //   if(password && confirmPassowrd && password?.value !== confirmPassowrd?.value){
  //     return {
  //       passwordmatchEorror : true,
  //     }
  //     // this.toastr.warning('Password did\'t match');
  //   }
  //   return null
  // }

  forgetpwsSubmit(url :any){
      if(this.forgetPasswordForm.status === 'VALID'){
        try {
          this.apiService.getForgetPws(this.forgetPasswordForm.value).subscribe(res =>{
            console.log('incomisg',this.user);
            console.log(res);
            console.log(this.forgetPasswordForm.value);
            this.toastr.success('Password change successfilly')
          })
        } catch (error) {
          console.log(error);
        }
      }
    // this.subscription.add(
    //   this.apiService.getForgetPws(url).subscribe(res =>{
    //     this.userData = res['data'];
    //   })
    // )
  }

}
