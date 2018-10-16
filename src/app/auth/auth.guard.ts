import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    /*canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }*/
     canActivate() {
    if (localStorage.getItem('token') !== null) {
      console.log("getting true..")
      return true;
    }
   else{
      console.log("canactive is blocking you sorry")
      this.router.navigate(['']);
      return false;
    }

  }
  logout(){
      localStorage.removeItem('role');
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      this.router.navigate(['/login']);
  }
}