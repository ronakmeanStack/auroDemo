/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,) { }
role="researcher"
loginForm:any;
submitted:any;
f:any;
onSubmit:any;
  ngOnInit() {
  }
  login(email, password){
   

  	if(this.role=="admin"){
  		this._router.navigate(['/app/admin']);
  	}
    else if(this.role=="researcher"){
      console.log("here")
     this._router.navigate(['/app/researcher']);
    }
  	else{
  	    this._router.navigate(['/app/user']);	
  	}
  	
  }

}
*/
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';



@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
role;
name;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
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

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

       /* this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/
    }
}