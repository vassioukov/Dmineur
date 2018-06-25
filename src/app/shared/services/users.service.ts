import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { SESSIONITEMS } from '../models/fake-session/sessions';
import { Session } from '../models/fake-session/session';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
	providedIn : 'root'
})
export class UsersService {
	public allUsers : Array<Session> = SESSIONITEMS;
	//Default user = Guest
	public userConnected : BehaviorSubject<Session> = new BehaviorSubject(new Session(-1,'guest','guest','guest'));

	//Return the user connected
	public get newUserConnected(): Observable<Session>{
		return this.userConnected.asObservable();
	}

	public getUserConnected(){
		return this.userConnected;
	}

	//Set the user's session
	public setUserConnected(data: Session){
		console.log(this.userConnected.value);
		this.userConnected.next(new Session(data._id,data.email,data.password,data.profile));
		console.log(this.userConnected.value);
		/*
		this.userConnected._id = userLogged._id;
		this.userConnected.email = userLogged.email;
		this.userConnected.password = userLogged.password;
		this.userConnected.profile = userLogged.profile;*/
	}

	constructor(private router: Router) {
	}

	ngOnCHang

	login(session):void{
		console.log("user.service.ts login");
		console.log(session);
		var users = this.getAllUsers();
		for(var i =0,c=users.length;i<c;i++){
	      /*
	      Web service : A faire
	      */
	  		if(users[i].email===session.email&&users[i].password===session.password){
	  			this.setUserConnected({_id:users[i]._id,email:users[i].email,password:users[i].password,profile:users[i].profile})

		        switch(this.userConnected.value.profile){
		          case 'client':
		            this.router.navigate(['/client']);
		            break;
		          case 'agent':
		            this.router.navigate(['/agent']);
		            break;
		          case 'admin':
		            this.router.navigate(['/admin']);
		            break;
		          default:
		            alert("Something went wrong in login.component.ts");
		            break;
		        }
	  		}
	  	}
	  }
	

	/**
	* Log out the user then tell all the subscribers about the new status
	*/
	logout() : void {

	}

	//Return every users
	public getAllUsers(){
		return this.allUsers;
	}
}