import { Injectable } from '@angular/core';
import { Session } from '../../../shared/models/fake-session/session';
import { Utilisateur } from '../../../shared/models/utilisateur/utilisateur';
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
	//Default user = Guest
	public userConnected:Utilisateur = Utilisateur.defaultUser();
	public isConnected: boolean = false;

	public getUserConnected(){
		return this.userConnected;
	}
	
	/*
		Set the user's session
		Ajouter webservice
	*/
	public setUserConnected(data: {} | Utilisateur){
		//Affectation des données utilisateurs à l'objet Utilisateur "userConnected"
		this.userConnected = Utilisateur.fromJson(data);
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

  	createClient(form):Observable<Utilisateur | {}>{
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
          case Utilisateur.profile_client:
            this.router.navigate(['/client']);
            break;
          case Utilisateur.profile_agent:
            this.router.navigate(['/agent']);
            break;
          case Utilisateur.profile_admin:
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
		this.userConnected  = Utilisateur.defaultUser();
		this.isConnected = false;
	  	this.router.navigate(['/public']);
	}

	getAllDemandesInscriptions():Observable<any | {}>{
		return this.http.get(demineurApiUrl+"/admin/demandesInscriptions").pipe(
  			map((res) => {
  				return res;
  			}),
  			catchError((err) => {
  				return err;
  			})
  		);
	}

	getDemandeInscription(demande_id):Observable<any | {}>{
		return this.http.get(demineurApiUrl+"/admin/demandeInscription/"+demande_id).pipe(
  			map((res) => {
  				return res;
  			}),
  			catchError((err) => {
  				return err;
  			})
  		);
	}



	//http://localhost:8080/Dmineur_Back_End_v2/admin/agents
	findAll(): Observable<Utilisateur[]> {
		return this.http.get(demineurApiUrl+"admin/agents").pipe(
			map((res:Response) => {res.json()}),
			catchError((error:any) => {
  				Observable.throw(error.json().error || 'Server error')
  			})
			/*
			catchError((error:any) => {
				Observable.throw(error.json().error || 'Server error')
			)}*/
		);
	}

}