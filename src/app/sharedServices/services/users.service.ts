import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

@Injectable ()
export class UserService {
  USER_DETAILS: any;

  constructor (private http: HttpClient) {
    //
  }

  getUserDetails (data: any) {
    this.USER_DETAILS = this.http.get ('https://reqres.in/api/unknown/2', data);

    const userDetails = new Subject ();

    setTimeout (() => {
      userDetails.next (this.USER_DETAILS);
      userDetails.complete ();
    }, 100);
    return this.USER_DETAILS;
  }
}