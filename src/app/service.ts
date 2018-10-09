import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class LoginService {
  result: any;
  constructor(private _http: Http) {}

  login() {
    const headers = new Headers();
    var data = [{ username: 'email', password: 'password' }];
    console.log('mail ' + JSON.stringify(data));
    headers.append('Content-Type', 'application/json');
    return this._http
      .post('/api/login', JSON.stringify(data), {
        headers: headers,
        withCredentials: true
      })
      .subscribe(res => res.json);
  }
  savereviewdata(){
     const headers = new Headers();
    var data = [{ username: 'email', password: 'password' }];
    console.log('mail ' + JSON.stringify(data));
    headers.append('Content-Type', 'application/json');
    return this._http
      .post('/api/login', JSON.stringify(data), {
        headers: headers,
        withCredentials: true
      })
      .subscribe(res => res.json);
  }
}
