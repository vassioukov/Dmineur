import { Injectable } from '@angular/core';
import { SESSIONITEMS } from '../../../shared/models/fake-session/sessions';
import { Session } from '../../../shared/models/fake-session/session';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

const port = ":8080";
const projectPath = "/Dmineur_Back_End_v2"
const demineurApiUrl = "http://localhost"+port+projectPath;

@Injectable({
	providedIn : 'root'
})
export class UserService {
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
	}

	constructor(private router: Router, private http: HttpClient) {
		/*
		this.http.get("https://apirone.com/api/v1/ticker").pipe(
			map((res) => {
				console.log(res);
			}),
			catchError((err) => {
				console.log(err);
			})
		);*/
	}

	contactWS(path, param=null){
		console.log(demineurApiUrl+path+param);
		return this.http.get(demineurApiUrl+path+param);	
	}

	login(session){
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
/*
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

		*/

		return this.http.get(demineurApiUrl+"/utilisateurs").pipe(
      		map((res) => {
      			console.log(res);
      		}),
      		catchError((error:any) => {
      			return Observable.throw(error.json().error || 'Error')
      		})
      	);
		/*
		console.log(demineurApiUrl+"/login");
		var a = this.http.post(demineurApiUrl+"/login", session, {
      		headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
      	}).pipe(
      		map((res) => {
      			console.log(res);
      		}),
      		catchError((error:any) => {
      			return Observable.throw(error.json().error || 'Error')
      		})
      	);
		*/


      	/*
      	a.subscribe(
      		res => {
      			console.log(res);
      		}, err => {
      			console.error(err);
      		}
      	);
      	console.log(a);*/

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