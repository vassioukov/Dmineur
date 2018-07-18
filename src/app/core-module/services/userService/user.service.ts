import { Injectable } from '@angular/core';
import { Utilisateur } from '../../../shared/models/utilisateur/utilisateur';
import { Agent } from '../../../shared/models/utilisateur/agent';
import { Client } from '../../../shared/models/utilisateur/client';
import { DemandeInscription } from '../../../shared/models/demande/demandeInscription/demandeInscription';
import { DemandeOuvertureCompte } from '../../../shared/models/demande/demandeClient/demandeOuvertureCompte';
import { DemandeChequier } from '../../../shared/models/demande/demandeClient/demandeChequier';
import { DemandeMAJDonnee } from '../../../shared/models/demande/demandeClient/demandeMAJDonnee';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of as observableOf, Subject } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';

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
  agentsSubject = new Subject<Agent[]>();
  hasTriedToDeleteSubject = new Subject<String>();

  //Emet la liste des agents à jour
  emitAgents() {
    this.getAllAgents().subscribe(
      res => {
        this.agentsSubject.next(res);
      }, err => {
        console.error(err);
      }
    )
  }

  emitErrorHasTriedToDelete(type:String){
    let msg:String;
    switch(type){
      case 'deleteAgent':
        msg = 'Il est interdit de supprimer une agent qui est affecté à au moins un client. Veuillez affecter les clients à un autre agent pour continuer';
        break;
    }
    this.hasTriedToDeleteSubject.next(msg);
  }


	public getUserConnected(){
		return this.userConnected;
	}
	
	//Affecte les données de l'utilisateur connecté
	public setUserConnected(data: Utilisateur){
    console.log(data);
		//Affectation des données utilisateurs à l'objet Utilisateur "userConnected"
		this.userConnected = Utilisateur.fromJson(data);
		this.isConnected = true;
	}

	constructor(private router: Router, private http: HttpClient) {
	}

  //Connexion utilisateur
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
				return _throw(err);
			})
		);
  	}

    //Création d'un utilisateur
  	createClient(client):Observable<Utilisateur>{
  		return this.http.post(demineurApiUrl+"/clients",client).pipe(
  			map((res:Utilisateur) => {
  				return res;
  			}),
  			catchError<Utilisateur,never>((err) => {
          return _throw(err);
  			})
  		);
  	}

    updateClient(client: Client){
      return this.http.put(demineurApiUrl+"/clients/"+client.id, client).pipe(
        map((res:Client) => {
          return res;
        }),
        catchError<Client,never>((err) => {
          return _throw(err);
        })
      );
    }

    addAgent(agent: Agent) {
      
      //this.agents.push(agent);
      //this.emitAgents();
      
      return this.http.post(demineurApiUrl+"/admin/agents", agent).pipe(
        map((res:Agent) => {
          //Emit event to refresh an agents's list
          this.emitAgents();
          return res;
        }),
        catchError<Agent,never>((err) => {
          return _throw(err);
        })
      );
    }

    updateAgent(agent: Agent){
      return this.http.put(demineurApiUrl+"/admin/agents", agent).pipe(
        map((res:Agent) => {
          //Emit event to refresh an agents's list
          this.emitAgents();
          return res;
        }),
        catchError<Agent,never>((err) => {
          return _throw(err);
        })
      );
    }

    deleteAgent(agent: Agent){
      return this.http.delete(demineurApiUrl+"/admin/agents/"+agent.id).pipe(
        map((res:any) => {
          console.log("res deleteAgent");
          this.emitAgents();
          return res;
        }),
        catchError<any,never>((err) => {
          console.log("err deleteAgent");
          this.emitErrorHasTriedToDelete('deleteAgent');
          return _throw(err);
        })
      );
    }

    getAgent(id : number){
      return this.http.get(demineurApiUrl+"/admin/agents/"+id).pipe(
        map((res:Agent) => {
          console.log(res);
          return res;
        }),
        catchError<Agent,never>((err) => {
          return _throw(err);
        })
        );
    }

    getClient(id : number){
      console.log(id);
      return this.http.get(demineurApiUrl+"/clients/"+id).pipe(
        map((res:Client) => {
          console.log(res);
          return res;
        }),
        catchError<Client,never>((err) => {
          return _throw(err);
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

  //Admin : Renvoi toutes les demandes d'inscription
  getAllDemandesInscriptions():Observable<DemandeInscription[]>{
  //Méthode utilisé par un admin
		return this.http.get(demineurApiUrl+"/admin/demandesInscriptions").pipe(
  			map((res:DemandeInscription[]) => {
  				return res;
  			}),
  			catchError<DemandeInscription[],never>((err) => {
          return _throw(err);
  			})
  		);
	}

  //Admin : Renvoi une demande d'inscription
  getDemandeInscription(demande_id):Observable<DemandeInscription>{
    return this.http.get(demineurApiUrl+"/admin/demandeInscription/"+demande_id).pipe(
        map((res:DemandeInscription) => {
          return res;
        }),
        catchError<DemandeInscription,never>((err) => {
          return _throw(err);
        })
      );
  }

  //Agent : Renvoi une demande d'inscription
  getDemandeInscriptionByAgent(demande_id):Observable<DemandeInscription>{
    return this.http.get(demineurApiUrl+"/"+this.userConnected.profile+"/"+this.userConnected.id+"/demandeInscription/"+demande_id).pipe(
        map((res:DemandeInscription) => {
          return res;
        }),
        catchError<DemandeInscription,never>((err) => {
          return _throw(err);
        })
      );
  }

  //Admin : Renvoi tous les agnets
	getAllAgents():Observable<Agent[]>{
		return this.http.get(demineurApiUrl+"/admin/agents").pipe(
  			map((res:Agent[]) => {
  				return res;
  			}),
  			catchError<Agent[],never>((err) => {
          return _throw(err);
  			})
  		);
	}

  //Agent & Admin : Renvoi tous les clients
	getAllClients():Observable<Client[]>{
		return this.http.get(demineurApiUrl+"/clients").pipe(
  			map((res:Client[]) => {
  				return res;
  			}),
  			catchError<Client[],never>((err) => {
          return _throw(err);
  			})
  		);
	}

  //Admin : Affecte un agent à un client
	setAgentToRequestInscription(request):Observable<boolean>{
		return this.http.put(demineurApiUrl+"/admin/setAgentToRequestInscription",request).pipe(
  			map((res:boolean) => {
  				return res;
  			}),
  			catchError<boolean,never>((err) => {
          return _throw(err);
  			})
  		);
	}

  //Agent : Renvoi toutes les demandes d'jnscription
  getAgentDemandesInscriptions():Observable<DemandeInscription[]>{
    return this.http.get(demineurApiUrl+"/agents/"+this.userConnected.id+"/demandeInscriptions").pipe(
        map((res:DemandeInscription[]) => {
          return res;
        }),
        catchError<DemandeInscription[],never>((err) => {
          return _throw(err);
        })
    );
  }
  //Agent & Admin : Méthode utilisé par un agent
  getDemandeOuvertureClientCompteBancaires():Observable<DemandeOuvertureCompte[]>{
    console.log(this.userConnected);
    return this.http.get(demineurApiUrl+"/agents/"+this.userConnected.id+"/demandeOuvertureClientCompteBancaires").pipe(
        map((res:DemandeOuvertureCompte[]) => {
          return res;
        }),
        catchError<DemandeOuvertureCompte[],never>((err) => {
          return _throw(err);
        })
    );
  }

  /*
  * Agent : Récupération des demandes de MAJ de données des clients affectés à l'agent
  */
  getDemandeMAJDonneeClients():Observable<DemandeMAJDonnee[]>{
      return this.http.get(demineurApiUrl+"/agents/"+this.userConnected.id+"/demandeMAJDonnees").pipe(
        map((res:DemandeMAJDonnee[]) => {
          console.log("récupération d'une demande de MAJ de donnée");
          console.log(res);
          return res;
        }),
        catchError<DemandeMAJDonnee[],never>((err) => {
          return _throw(err);;
        })
    );
  }




  /*
  * Agent : Récupération des demandes d'inscriptions 
  */
  getAgentDemandesInscription(id):Observable<DemandeInscription>{
    return this.http.get(demineurApiUrl+"/agents/"+this.userConnected.id+"/demandeInscriptions/"+id).pipe(
        map((res:DemandeInscription) => {
          console.log("récupération d'une demande d'inscription");
          console.log(res);
          return res;
        }),
        catchError<DemandeInscription,never>((err) => {
          return _throw(err);;
        })
    );
  }





  /*
  * Agent : Récupération d'une demande de chéquier
  */
  getDemandeChecks():Observable<DemandeChequier[]>{
      return this.http.get(demineurApiUrl+"/agents/"+this.userConnected.id+"/demandeChecks").pipe(
        map((res:DemandeMAJDonnee[]) => {
          console.log("récupération d'une demande de chéquier");
          console.log(res);
          return res;
        }),
        catchError<DemandeMAJDonnee[],never>((err) => {
          return _throw(err);;
        })
    );
  }

  /*
  * Agent : Récupération d'une demande d'ouverture d'un compte bancaire
  */
  getDemandeOuvertureClientCompteBancaire(id):Observable<DemandeOuvertureCompte>{
      return this.http.get(demineurApiUrl+"/agents/"+this.userConnected.id+"/demandeOuvertureClientCompteBancaires/"+id).pipe(
        map((res:DemandeOuvertureCompte) => {
          console.log("récupération d'une demande d'ouverture de compte bancaire");
          console.log(res);
          return res;
        }),
        catchError<DemandeOuvertureCompte,never>((err) => {
          return _throw(err);;
        })
    );
  }

  /*
  * Agent : Récupération d'une demande de chéquier
  */
  getDemandeCheck(id):Observable<DemandeChequier>{
      return this.http.get(demineurApiUrl+"/agents/"+this.userConnected.id+"/demandeChecks/"+id).pipe(
        map((res:DemandeChequier) => {
          console.log("récupération d'une demande de chéquier");
          console.log(res);
          return res;
        }),
        catchError<DemandeChequier,never>((err) => {
          return _throw(err);;
        })
    );
  }

  /*
  * Agent : Récupération d'une demande de mise à jour des données d'un client
  */
  getDemandeMAJDonneeClient(id):Observable<DemandeMAJDonnee>{
      return this.http.get(demineurApiUrl+"/agents/"+this.userConnected.id+"/demandeMAJDonnees/"+id).pipe(
        map((res:DemandeMAJDonnee) => {
          console.log("récupération d'une demande de MAJ de donnée");
          console.log(res);
          return res;
        }),
        catchError<DemandeMAJDonnee,never>((err) => {
          return _throw(err);;
        })
    );
  }

  //Agent : Validation d'une demande d'inscription
  validerDemandeInscription(request:DemandeInscription):Observable<any>{
      request.demande_traite = true;
      return this.http.put(demineurApiUrl+"/agents/"+this.userConnected.id+"/demandeInscription", request).pipe(
        map((res:any) => {
          console.log(res);
          return res;
        }),
        catchError<any,never>((err) => {
          return _throw(err);;
        })
    );
  }

  demandeInscriptionIncompleteDemandeMAJDonnee(request: DemandeInscription):Observable<any>{
      return this.http.post(demineurApiUrl+"/agents/"+this.userConnected.id+"/demandeMAJDonnees", request).pipe(
        map((res:any) => {
          console.log(res);
          return res;
        }),
        catchError<any,never>((err) => {
          return _throw(err);;
        })
    );
  }


  getAdminNotifications():Observable<Notification[]>{
      return this.http.get(demineurApiUrl+"/admin/"+this.userConnected.id+"/notifications").pipe(
        map((res:Notification[]) => {
          return res;
        }),
        catchError<any,never>((err) => {
          return _throw(err);;
        })
    );
  }

  getAgentNotifications():Observable<Notification[]>{
      return this.http.get(demineurApiUrl+"/agents/"+this.userConnected.id+"/notifications").pipe(
        map((res:Notification[]) => {
          return res;
        }),
        catchError<any,never>((err) => {
          return _throw(err);;
        })
    );
  }

  getClientNotifications():Observable<Notification[]>{
      return this.http.get(demineurApiUrl+"/clients/"+this.userConnected.id+"/notifications").pipe(
        map((res:Notification[]) => {
          return res;
        }),
        catchError<any,never>((err) => {
          return _throw(err);;
        })
    );
  }

}