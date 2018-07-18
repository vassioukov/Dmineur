import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core-module/services/userService/user.service';
import { Utilisateur } from '../../shared/models/utilisateur/utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user;
  displayError:Boolean = false;

  constructor(public userService: UserService) { 
  }

  login(loginForm){
    this.displayError = false;
    let user = Utilisateur.defaultUser();
    user.email = loginForm.value.email;
    user.password = loginForm.value.password;
    
    this.userService.login(user).subscribe(
      res => {
        /**
        * A remplacer avec un token de session
        **/
        if(loginForm.value.rememberMe){
          localStorage.setItem('Dmineur', JSON.stringify(this.userService.userConnected));
        } else {
          //Remeber me isn't checked, session won't be save when user'll close the browser
          sessionStorage.setItem('Dmineur', JSON.stringify(this.userService.userConnected));
        }
        this.userService.routing();
      }, err => {
        console.log("ok");
        this.displayError = true;
        console.error(err);
      }
    );
  }
}
