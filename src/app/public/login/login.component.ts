import { Component, OnInit } from '@angular/core';

import {Session} from '../../shared/models/fake-session/session';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../core-module/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userLogged: Session;


  constructor(public userService: UserService) { 
  }

  login(session){
    this.userService.login(session);
  }


  ngOnInit() {
  }
}
