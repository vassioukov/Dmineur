import { Injectable } from '@angular/core';
import { Session } from '../../../shared/models/fake-session/session';
import { Utilisateur } from '../../../shared/models/utilisateur/utilisateur';
import { Agent } from '../../../shared/models/utilisateur/agent';
import { Client } from '../../../shared/models/utilisateur/client';
import { DemandeInscription } from '../../../shared/models/demande/demandeInscription/demandeInscription';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of as observableOf, Subject } from 'rxjs';

const port = ":8080";
const projectPath = "/Dmineur_Back_End_v2"
const demineurApiUrl = "http://localhost"+port+projectPath;

@Injectable({
	providedIn : 'root'
})
export class UserService {

  private agents: Utilisateur[] = [
  Utilisateur.defaultUser(),
  Utilisateur.defaultUser(),
  Utilisateur.defaultUser(),
  Utilisateur.defaultUser(),
  ];

  userSubject = new Subject<Utilisateur[]>();

  emitAgents() {
    this.userSubject.next(this.agents.slice());
  }

  addAgent(agent: Utilisateur) {
    this.agents.push(agent);
    this.emitAgents();
  }

  removeAgent(agent: Utilisateur) {
    const userIndexToRemove = this.agents.findIndex(
      (agentEl) => {
        if(agentEl === agent) {
          return true;
        }
      }
      );
    this.agents.splice(userIndexToRemove, 1);
    this.emitAgents();
  }

  changeAgent(i: number, newAgent){
    return this.agents[i];
  }
  getAgent(id : number){
    return this.http.get(demineurApiUrl+"/admin/agents").pipe(
      map((res:Agent[]) => {
        return res;
      }),
      catchError<Agent[],never>((err) => {
        return err;
      })
      );
  }
















  //-------------------------------


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
    public setUserConnected(data: Utilisateur){
      console.log(data);
		//Affectation des données utilisateurs à l'objet Utilisateur "userConnected"
		this.userConnected = Utilisateur.fromJson(data);
		this.isConnected = true;
	}

	constructor(private router: Router, private http: HttpClient) {
	}

	login(user):Observable<boolean>{
		this.isConnected = false;
		return this.http.post(demineurApiUrl+"/login",user).pipe(
			map((res:Utilisateur) => {
				if(res != null){
					this.setUserConnected(<Utilisateur>res);
				}
        return this.isConnected;
      }),
			catchError<boolean,never>((err) => {
				return err;
			})
      );
  }

  createClient(form):Observable<Utilisateur>{
    return this.http.post(demineurApiUrl+"/clients",JSON.stringify(form)).pipe(
      map((res:Utilisateur) => {
        return res;
      }),
      catchError<Utilisateur,never>((err) => {
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

  getAllDemandesInscriptions():Observable<DemandeInscription[]>{
  //Méthode utilisé par un admin
  return this.http.get(demineurApiUrl+"/admin/demandesInscriptions").pipe(
    map((res:DemandeInscription[]) => {
      return res;
    }),
    catchError<DemandeInscription[],never>((err) => {
      return err;
    })
    );
}

  //Méthode utilisé par un admin
  getDemandeInscription(demande_id):Observable<DemandeInscription>{
    return this.http.get(demineurApiUrl+"/admin/demandeInscription/"+demande_id).pipe(
      map((res:DemandeInscription) => {
        return res;
      }),
      catchError<DemandeInscription,never>((err) => {
        return err;
      })
      );
  }

  //Méthode utilisé par un admin
  getDemandeInscriptionByAgent(demande_id):Observable<DemandeInscription>{
    return this.http.get(demineurApiUrl+"/"+this.userConnected.profile+"/"+this.userConnected.id+"/demandeInscription/"+demande_id).pipe(
      map((res:DemandeInscription) => {
        return res;
      }),
      catchError<DemandeInscription,never>((err) => {
        return err;
      })
      );
  }

  //Méthode utilisé par un admin
  getAllAgents():Observable<Agent[]>{
    return this.http.get(demineurApiUrl+"/admin/agents").pipe(
      map((res:Agent[]) => {
        return res;
      }),
      catchError<Agent[],never>((err) => {
        return err;
      })
      );
  }

  //Méthode utilisé par un agent et admin
  getAllClients():Observable<Client[]>{
    return this.http.get(demineurApiUrl+"/clients").pipe(
      map((res:Client[]) => {
        return res;
      }),
      catchError<Client[],never>((err) => {
        return err;
      })
      );
  }


	//http://localhost:8080/Dmineur_Back_End_v2/admin/agents
	findAll(): Observable<Utilisateur[]> {
		return this.http.get(demineurApiUrl+"admin/agents").pipe(
			map((res:Response) => {res.json()}),
			catchError<Utilisateur[],never>((err) => {
				return err;
      })
      );
	}

  //Méthode utilisé par un admin
  setAgentToRequestInscription(request):Observable<boolean>{
    return this.http.put(demineurApiUrl+"/admin/setAgentToRequestInscription",request).pipe(
      map((res:boolean) => {
        return res;
      }),
      catchError<boolean,never>((err) => {
        return err;
      })
      );
  }

  //Méthode utilisé par un agent
  getAgentDemandesInscriptions():Observable<DemandeInscription[]>{
    console.log(this.userConnected);
    return this.http.get(demineurApiUrl+"/agents/"+this.userConnected.id+"/demandeInscriptions").pipe(
      map((res:DemandeInscription[]) => {
        return res;
      }),
      catchError<DemandeInscription[],never>((err) => {
        return err;
      })
      );
  }
}