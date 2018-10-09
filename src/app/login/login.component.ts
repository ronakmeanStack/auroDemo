
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import "rxjs/Rx";
import { Observable } from 'rxjs';
import {LoginService} from './login.service'
import{ResearchdataService} from '../services/research.service'

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
        private researchdataService:ResearchdataService
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
        this.submitted = true;
        console.log("-------",this.f.username.value)
        this.loginService.login(this.f.username.value,this.f.password.value)
        .subscribe(res => console.log("--res",res))

         if (this.f.username.value == 'tripathy@aurobindo.com' && this.f.password.value == 'tripathy@123') {
            this.router.navigate(['/app/researcher']);
            localStorage.setItem('role', 'Researcher');
            localStorage.setItem('user', ' Dr tripathy');
          }
          if (this.f.username.value == 'ram@aurobindo.com' && this.f.password.value == 'ram@123') {
            this.router.navigate(['/app/admin']);
            localStorage.setItem('role', 'Admin');
             localStorage.setItem('user', 'Ram guntur');
          }
          if (this.f.username.value == 'ronak@aurobindo.com' && this.f.password.value == 'ronak@123') {
            this.router.navigate(['/app/reviewer']);
            localStorage.setItem('role', 'Admin');
            localStorage.setItem('user', 'Ronak');
          } 




        if(this.f.username.value)

        
        if (this.loginForm.invalid) {
            return;
        }

      
    }
    
   


/* onSubmit(event, email, password) {
    if(email && password != null ){
      console.log("not null")
      event.preventDefault();
      
     this.loginService.login(this.f.username.value,this.f.password.value)
        .subscribe(response => {
          console.log("-----response",response.role)
          if(response.save === true){
            localStorage.apiToken=response.token
            //this.showSuccess()
            var role= response.role;
            this.name =response.name;
            if(role==3){
              this.roletype="admin"
            }
            else if(role==2){
              this.roletype="Reviewer"
            }
            else if(role==1){
             this.roletype="Researcher"
            }
            localStorage.setItem('name',this.name)
            localStorage.setItem('role',this.roletype)
           

           switch (role) {
             case 3:
               this.router.navigate(['/app/admin']);
               break;
             
               case 2:
               this.router.navigate(['/app/user']);
               break;

               case 1:
              this.router.navigate(['/app/researcher']);
           
               break;

             default:
               
               break;
           }
           
            
          }
          else if(response.save === false){
            
           
            console.log("password or user not matching 11")
          }
          }, this.handleError);
    }
    else{
      console.log("password or user not matching")
       
    }
  }

  handleError(error) {
    console.log(error.status);
  }*/



}