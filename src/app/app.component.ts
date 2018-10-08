import { Component } from '@angular/core';
import { LoginService } from './service';
//import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auro';
  constructor(private loginService: LoginService) {}
  getdata() {
    alert('clcik');
    this.loginService.login();
  }
}
