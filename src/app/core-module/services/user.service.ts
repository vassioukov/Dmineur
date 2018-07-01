import { Injectable, EventEmitter, Output } from '@angular/core';
import { SESSIONITEMS } from '../../shared/models/fake-session/sessions';
import { Session } from '../../shared/models/fake-session/session';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const port = ":8101";
const projectPath = "/Dmineur_Back_End_v2"
const demineurApiUrl = "http://localhost"+port+projectPath;

@Injectable({
	providedIn : 'root'
})
export class UserService {
  	@Output() public somethingChanged: EventEmitter<Session> = new EventEmitter();
	public allUsers : Array<Session> = SESSIONITEMS;
	//Default user = Guest
	public userConnected : Session = new Session(-2,'guest','guest','guest');
	public isConnected: boolean = false;

	public getUserConnected(){
		return this.userConnected;
	}
	
	/*
		Set the user's session
		Ajouter webservice
	*/
	public setUserConnected(data: Session){
		this.userConnected._id = data._id;
		this.userConnected.email = data.email;
		this.userConnected.password = data.password;
		this.userConnected.profile = data.profile;
		this.isConnected = true;
		this.somethingChanged.emit(this.userConnected);
	}

	constructor(private router: Router, private http: HttpClient) {
	}

	testWS(){
		return this.http.get(demineurApiUrl+"/utilisateurs/10");
	}

	contactWS(path, param=null){
		console.log(demineurApiUrl+path+param);
		return this.http.get(demineurApiUrl+path+param);	
	}

	login(session):boolean{
      	/*
      		Web service : A faire
      	*/
      	/*
      	this.contactWS("/utilisateurs","/1").subscribe( res => {
	      console.log("res");
	      console.log(res);
	    }, err => {
	      console.log("err");
	      console.log(err);
	    });
	    */

	    const body = new HttpParams()
	    	.set("email",session.email)
	    	.set("password",session.password);


      	var test = this.http.post(demineurApiUrl+'/login', body.toString(), {
      		headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
      	});

      	test.subscribe( res => {
	      console.log("res");
	      console.log(res);
	    }, err => {
	      console.log("err");
	      console.log(err);
	    });
      	console.log(test);


		var users = this.getAllUsers();
		for(var i =0,c=users.length;i<c;i++){
	  		if(users[i].email===session.email&&users[i].password===session.password){
	  			this.setUserConnected({_id:users[i]._id,email:users[i].email,password:users[i].password,profile:users[i].profile})

		        switch(this.userConnected.profile){
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
	  	//_id==-2 is a guest user
	  	return this.userConnected._id !==-2;
	  }
	

	/**
	* Log out the user then tell all the subscribers about the new status
	*/
	logout() : void {
	  	localStorage.removeItem('Dmineur');
	  	sessionStorage.removeItem('Dmineur');
		this.userConnected  = new Session(-2,'guest','guest','guest');
		this.isConnected = false;
	  	this.router.navigate(['/public']);
	}

	//Return every users
	public getAllUsers(){
		return this.allUsers;
	}
}