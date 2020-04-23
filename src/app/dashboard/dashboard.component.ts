import { Component, OnInit } from '@angular/core';

import { UserService } from '../sharedServices/services/users.service';

@Component ({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardSection implements OnInit {
  userInfo: any;

  constructor (private userService: UserService) {
    //
  }

  ngOnInit () {
    this.userService.getUserDetails ().subscribe ((result: any) => {
      this.userInfo = result.data;
    });
  }
}