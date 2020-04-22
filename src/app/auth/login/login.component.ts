import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../sharedServices/services/auth.service';

@Component ({
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.scss']
})
export class LoginSection implements OnInit{ 
  loginForm: FormGroup;

  constructor (private formBuilder: FormBuilder, private authService: AuthService) { 
    //
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group ({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength (4)]]
    });
  }

  loginUser (event: any) {
    const eventObj = {
      "email": event.username,
      "password": event.password
    }
    this.authService.getLoginDetails (eventObj);
  }
}