import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../sharedServices/services/auth.service';

import { Router } from "@angular/router";

@Component ({
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.scss']
})
export class LoginSection implements OnInit{ 
  loginForm: FormGroup;

  constructor (private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { 
    //
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group ({
      username: ['eve.holt@reqres.in', [Validators.required]],
      password: ['cityslicka', [Validators.required, Validators.minLength (4)]]
    });
  }

  loginUser (event: any) {
    const eventObj = {
      "email": event.username,
      "password": event.password
    }
    const value = {}
    this.authService.getLoginDetails (eventObj).subscribe ((data: any) => { 
      localStorage.setItem('token', data.token);
      this.router.navigate(['dashboard'])
    }) ;
  
  }
}