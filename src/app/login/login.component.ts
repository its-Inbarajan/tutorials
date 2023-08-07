import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { Subscription, interval ,Observable, takeUntil, Subject} from 'rxjs';
import { ApiService } from '../service/api.service';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})

export class LoginComponent implements OnInit {
  preview: string = '';
  public userForm! : FormGroup;
  public ModalReference : any;
  public submit!: boolean;
  userData : any;
  users: any[] = [];
  sub : any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  public user : any


  constructor(
    public fb : FormBuilder,
    public modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    public service : AuthService,
    public router : Router,
    public apiService : ApiService
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email:['',
      [Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        password : ['', Validators.compose([Validators.required])]
    });
  }

  get Form(){
    return this.userForm.controls
  }

  login(popUp : any){
    this.modalService.open(popUp)
  }

  public loginSubmit(){
    try {
        if(this.userForm.status === 'VALID')  {

          this.service.login(this.userForm).pipe(takeUntil(this.destroy$)).subscribe(data=>{

            console.log(data);

            this.toastr.success('Login Scuess');
          })
        }
      else{
        this.toastr.warning('Please fill the field')
      }
    } catch (error) {
      console.log("err", error);
    }

    // if(this.userForm.status === 'VALID'){
      // console.log("incoming");
      // async function login(email : string, password : string): Promise<any> {
      //   const apiUrl = 'https://localhost:4200/api/login'

      //   const reqBody = {
      //     email : email,
      //     password : password
      //   }
      //   console.log(reqBody);
      //   try {
      //     const response = await fetch(apiUrl,{
      //       method : 'POST',
      //       headers:{
      //           'Content-type' : 'application/json',
      //       },
      //       body : JSON.stringify(reqBody)
      //     });

      //     if(!response.ok){
      //       throw new Error('Login field');
      //     }
      //     const data = await response.json();
      //     const token = data.token; // Replace 'token' with the actual property name in the response

      //     return token;
      //   } catch (error) {
      //     console.log("error" + error);

      //   }
      // }

//  }
}


 forgetPassword(){
  this.modalService.open(ForgetPasswordComponent,{
    centered : true,
      size : "md"
  });
 }

//  loginSubmit() {
//   this.apiService.getUser().pipe(takeUntil(this.destroy$)).subscribe((users: any) => {
//       this.users = users;
//   });
// }
}
