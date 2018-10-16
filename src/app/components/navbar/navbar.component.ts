import { Component, OnInit } from '@angular/core';
import {AuthGuard} from '../../auth/auth.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authGuard:AuthGuard) { }
  role=localStorage.getItem('role');
  name=localStorage.getItem('name');
  rolevalues;
  public _opened: boolean = false;
 
  public _toggleSidebar() {
    this._opened = !this._opened;
  }
  ngOnInit() {
  	this.rolevalues=this.rolevalue();
    console.log("value is here",this.rolevalues)

  }
  logout(){

    
    this.authGuard.logout();
  }
  rolevalue(){
   if(this.role=='1'){
     return 'Researcher';
   }
     if(this.role=='2'){
       return 'Reviewer';
     }
       if(this.role=='3'){
         return 'Admin';
       }
  }
}
