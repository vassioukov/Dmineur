import { Component } from '@angular/core';
import { Session } from '../../shared/models/fake-session/session';
import { Router } from '@angular/router';
import { UserService } from '../../core-module/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userLogged: Session;


  constructor(public userService: UserService) { 
  }


  //Utiliser alert
  login(loginForm){
  	console.log(loginForm.remeberMe);
  	if(!this.userService.login(loginForm.value)){
  		loginForm.reset();
  	} else {
      console.log(JSON.stringify(this.userService.userConnected));
  		if(loginForm.value.rememberMe){
			localStorage.setItem('Dmineur', JSON.stringify(this.userService.userConnected));
  		} else {
  			//Remeber me isn't checked, session won't be save when user'll close the browser
			sessionStorage.setItem('Dmineur', JSON.stringify(this.userService.userConnected));
  		}
  		console.log(this.userService);
  	}

  }
}
