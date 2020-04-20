import { Component,OnInit} from '@angular/core';

@Component ({
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.css']
})
export class LoginSection implements OnInit{ 

  constructor () {  }

  ngOnInit() {
   
  }

  loginUser(a) {
  	var username = a.target.elements[0].value;
  	var password = a.target.elements[1].value;
    console.log(a);
  }
  
}