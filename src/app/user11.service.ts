import { Injectable } from '@angular/core';
import {HttpClient } from  '@angular/common/http';
import{User} from       './user';
@Injectable({
  providedIn: 'root'
})
export class User11Service {
  _url='http://localhost:3000/user11';

  constructor(private _http:HttpClient) { }

  user11(user:User){
     return this._http.post<any>(this._url,user);
  }
}
