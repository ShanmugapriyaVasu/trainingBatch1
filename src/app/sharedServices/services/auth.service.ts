import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable ()
export class AuthService {
  login_details: any;

  constructor (private http: HttpClient) {
    //
  }

  getLoginDetails (data: any) {
    console.log (data);
    // this.login_details = this.http.post ('https://reqres.in/api/login', data);
    // return this.login_details;
  }
}