import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Researcher} from '../model/result-research';
@Injectable()
export class ResearchdataService {
  result: any;
  constructor(private _http: Http,private httpClient:HttpClient) {}

 /* login() {
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
  }*/
  getreseachdata(): Observable<any>{
    console.log("will get the data")
   return this.httpClient.get('/api/getsrchresult');
   
}
checkListData(obj): Observable<any>  {
 return this.httpClient.post('/api/getsrchresult', obj);
 }
}