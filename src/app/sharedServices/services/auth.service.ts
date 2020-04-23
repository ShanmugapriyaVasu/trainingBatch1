import { Inject,Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';


import { Subject } from 'rxjs';

@Injectable ()
export class AuthService {
  LOGIN_TOKEN: any;
  Login = 'key';

  constructor (private http: HttpClient) {
    //
  }

  getLoginDetails (data: any) {
    this.LOGIN_TOKEN = this.http.post ('https://reqres.in/api/login', data);

    const loginDetails = new Subject ();

    setTimeout (() => {
      loginDetails.next (this.LOGIN_TOKEN);
      loginDetails.complete ();
    }, 100);
    return this.LOGIN_TOKEN;
    
  }
}