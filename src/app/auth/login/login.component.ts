import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component ({
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.scss']
})
export class LoginSection implements OnInit{ 
  loginForm: FormGroup;

  constructor (private formBuilder: FormBuilder) { 
    //
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group ({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength (4)]]
    });
  }

  loginUser (event: any) {
    console.log (event);
  }
}