import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { Subscription, interval ,Observable} from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  preview: string = '';
  public userForm! : FormGroup;
  public ModalReference : any;
  public submit!: boolean;
  userData : any;
  sub : any;
  constructor(
    public fb : FormBuilder,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    public service : AuthService,
    public router : Router
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email:['',
      [Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],

        password : ['', Validators.compose([Validators.required])]
    })

  }

  get Form(){
    return this.userForm.controls
  }

  login(popUp : any){
    this.modalService.open(popUp)
  }

  public loginSubmit(){
    try {
      if(this.userForm.valid){
        this.service.getByCode(this.userForm.value).subscribe(res=>{
          this.toastr.success('Login Scuess');
          this.userData = res;
          console.log(this.userData);

        })
      }else{
        this.toastr.warning('Please fill the field')
      }
    } catch (error) {
      console.log("err", error);

    }
 }


}
