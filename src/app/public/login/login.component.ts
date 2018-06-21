import { Component, OnInit } from '@angular/core';
import {Session} from '../fake-session/session';
import {SESSIONITEMS} from '../fake-session/sessions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
  	private router: Router) { }

  ngOnInit() {
  }


  //@TODO
  login(session){
    /*
    Test à supprimer
    */
  	let session2 = new Session(1,session.login,session.password);
    var connected = false;
  	for(var i =0,c=SESSIONITEMS.length;i<c;i++){
  		if(SESSIONITEMS[i].login===session2.login&&SESSIONITEMS[i].password===session2.password){
  			console.log("connected");
        connected = true;
  			this.router.navigate(['/client']);
  		}
  	}
    if(!connected){
      alert("You failed to authenticate yourself... looooser :P");
    }
  }
}
