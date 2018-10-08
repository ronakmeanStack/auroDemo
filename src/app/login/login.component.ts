import { Component, OnInit } from '@angular/core';
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
