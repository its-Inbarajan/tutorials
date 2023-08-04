import { VariableBinding } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm !: FormGroup;


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
      otp:[],
      newPassword :[],
      confirmPassowrd :[]
  })
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

  forgetpwsSubmit(event :any){

    // let password = control.get('newPassword');

    // let confirmPassowrd = control.get('confirmPassword');

    // if(password && confirmPassowrd && password !== confirmPassowrd){
    //   console.log('works');

    //   this.toastr.warning('Password does\'t Match');

      if(this.forgetPasswordForm.status === 'VALID'){
        try {
          this.apiService.getForgetPws(this.forgetPasswordForm.value).subscribe(res =>{

          })
        } catch (error) {
          console.log(error);
        }
      }
    // }
  }

}
