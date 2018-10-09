import { Injectable } from '@angular/core';
import {Http , Headers , RequestOptions } from '@angular/http';
import {  Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LoginService {
  result: any;
  constructor( private  _http: Http , private httpClient:HttpClient ) { }
  
  login(email, password) {
    const headers = new Headers();
    var data = [{username:email,password:password}]
    console.log("mail "+JSON.stringify(data))
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/login', JSON.stringify(data) ,{headers : headers, withCredentials: true})
      .map(res => res.json())

  }



  test1(){
    /*return this._http.get('/api/getuser').toPromise().then((response) => 
console.log("-------------",response.json())
      );*/
      console.log("in service")

      return this._http.get('/api/getuser').map( r => r.json())
      ;
  }

 get_products(){
    this.httpClient.get('/api/getuser').subscribe((res)=>{
        console.log(res);
    });
}

 

}