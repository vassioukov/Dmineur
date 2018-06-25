import { Component, OnInit } from '@angular/core';

import {Session} from '../../shared/models/fake-session/session';

import { Router } from '@angular/router';
import { UsersService } from '../../shared/services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsersService]
})
export class LoginComponent implements OnInit {
  userLogged: Session;


  constructor(public usersService: UsersService) { 
  }

  login(session){
    console.log(session);
    this.usersService.somethingChanged.emit({
        data: "Dummy Data For Post Component"
    })
    this.usersService.login(session);
  }


  ngOnInit() {
  }
}
