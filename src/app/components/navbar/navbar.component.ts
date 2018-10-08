import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  role=localStorage.getItem('role');
name=localStorage.getItem('user');
  public _opened: boolean = false;
 
  public _toggleSidebar() {
    this._opened = !this._opened;
  }
  ngOnInit() {
  	
  }
}
