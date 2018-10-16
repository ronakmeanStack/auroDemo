
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import "rxjs/Rx";
import { Observable } from 'rxjs';
import {LoginService} from './login.service'
import{ResearchdataService} from '../services/research.service'
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
 roletype;
  name;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private loginService:LoginService,
        private researchdataService:ResearchdataService,
        private toastr:ToastrService,
        private spinner: NgxSpinnerService
        ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
      this.spinner.show();
        this.submitted = true;
         event.preventDefault();
        console.log("-------",this.f.username.value)
        this.loginService.login(this.f.username.value,this.f.password.value)
        .subscribe(res => {
          this.spinner.hide();
          console.log("--res-------------",res)
            if(res.save==true){
            console.log("getting true")
           localStorage.setItem('name',res.name);
           localStorage.setItem('role',res.role);
           localStorage.setItem('token',res.token);
           switch (localStorage.getItem('role')) {
             case '3':
               this.successmessageadmin();
               this.router.navigate(['/app/admin']);
               break;
             
               case '2':
               this.successmessagereviewer();
               this.router.navigate(['/app/user']);
               break;

               case '1':
               this.successmessageresearcher();
              this.router.navigate(['/app/researcher']);
           
               break;

             default:
               
               break;
           }
            }
            else{
             this.errormessage();
            }
             


        })


          
         
      


        if(this.f.username.value)

        
        if (this.loginForm.invalid) {
            return;
        }

      
    }
   errormessage(){
    this.toastr.error('please provide correct username and password', 'Error');
  }
  successmessageadmin(){
     this.toastr.success('welcome admin', 'Sucess');
  }
     successmessagereviewer(){
     this.toastr.success('welcome reviewer', 'Sucess');
  } 
     successmessageresearcher(){
     this.toastr.success('welcome researcher', 'Sucess');
  }




}