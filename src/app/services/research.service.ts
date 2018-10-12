import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import {Observable} from 'rxjs/Observable';
import { Observable } from "rxjs/Rx";
import {Researcher} from '../model/result-research';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, flatMap } from "rxjs/operators";
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
@Injectable()
export class ResearchdataService {
  result: any;
  constructor(private _http: Http,private httpClient:HttpClient) {}

  sumbitreview(datas) {
    const headers = new Headers();
    var data = datas;
    console.log('mail----service ' + JSON.stringify(data));
    headers.append('Content-Type', 'application/json');
    return this._http
      .post('/api/reviewarticle', JSON.stringify(data), {
        headers: headers,
        withCredentials: true
      })
      .subscribe(res => res.json);
  }

   sumbitasdraft(datas) {
    const headers = new Headers();
    var data = datas;
    console.log('mail----service ' + JSON.stringify(data));
    headers.append('Content-Type', 'application/json');
    return this._http
      .post('/api/savearasDraftticle', JSON.stringify(data), {
        headers: headers,
        withCredentials: true
      })
      .subscribe(res => res.json);
  }
 /* getreseachdata(): Observable<any>{
    console.log("will get the data")
   return this.httpClient.get('/api/getsrchresult').map(res =>res.json);
   
}*/

getsearchArt() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get('/api/getsrchresult' ,{headers : headers, withCredentials: true})
      .map(res => res.json());
  }
 /* getsearchArt(): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return Observable.interval(3000).pipe(flatMap(() => {
        return this._http.get('/api/getsrchresult' ,{headers : headers, withCredentials: true})
      .map(res => res.json());
        }));

    // return this._http.get('/api/getsrchresult' ,{headers : headers, withCredentials: true})
    //   .map(res => res.json());
  }*/

checkListData(obj): Observable<any>  {
 return this.httpClient.post('/api/savedraft', obj);
 }


/*removearticle(id){
  console.log("---",id);
  return this.httpClient.post('/api/deleteart',id);
}*/


removearticle(id) {
    const headers = new Headers();
    const data={id: id}
         
    
    headers.append('Content-Type', 'application/json');
    return this._http
      .post('/api/deleteart', data, {
        headers: headers,
        withCredentials: true
      })
      .subscribe((res:any) => console.log(res));
  }
 sumbitdraft(data) {
    const headers = new Headers();
    var data = data;
    console.log('sumbitdraft----service ' + JSON.stringify(data));
    headers.append('Content-Type', 'application/json');
    return this._http
      .post('/api/savedraft', JSON.stringify(data), {
        headers: headers,
        withCredentials: true
      })
      .subscribe(res => res.json);
  }


sumbitdraftbyre(data) {
    const headers = new Headers();
    var data = data;
    console.log('sumbitdraft----service by researcher' + JSON.stringify(data));
    headers.append('Content-Type', 'application/json');
    return this._http
      .post('/api/savedraftres', JSON.stringify(data), {
        headers: headers,
        withCredentials: true
      })
      .subscribe(res => res.json);
  }

  
  sumbitdtriage(data) {
    const headers = new Headers();
    var data = data;
    console.log('sumbitdraft----service ' + JSON.stringify(data));
    headers.append('Content-Type', 'application/json');
    return this._http
      .post('/api/savedtriage', JSON.stringify(data), {
        headers: headers,
        withCredentials: true
      })
      .subscribe(res => res.json);
  }

}