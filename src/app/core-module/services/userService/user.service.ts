import { Injectable } from '@angular/core';
import { SESSIONITEMS } from '../../../shared/models/fake-session/sessions';
import { Session } from '../../../shared/models/fake-session/session';
import { Utilisateur } from '../../../shared/models/utilisateur';
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
	}

	login(form):Observable<boolean | {}>{
  		//Test effectué, suppression property testé
  		delete(form.rememberMe);
		this.isConnected = false;
		return this.http.post(demineurApiUrl+"/login",JSON.stringify(form)).pipe(
			map((res) => {
				if(res != null){
					this.setUserConnected(<Utilisateur>res);
				}
			    return this.isConnected;
			}),
			catchError((err) => {
				return err;
			})
		);
  	}

  	createClient(form):Observable<boolean | {}>{
  		return this.http.post(demineurApiUrl+"/clients",JSON.stringify(form)).pipe(
  			map((res) => {
  				return res;
  			}),
  			catchError((err) => {
  				return err;
  			})
  		);
  	}

  	routing(){
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