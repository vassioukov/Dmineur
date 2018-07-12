import { Injectable } from '@angular/core';
import { Demande } from '../demande';
import { Client } from '../../utilisateur/client';

@Injectable() 
export class DemandeClient extends Demande {
	static readonly type_demande_client_MAJ_donnee = "demandeMAJDonnee";
	static readonly type_demande_client_ouverture_compte = "demandeOuvertureClient";
	static readonly type_demande_client_chequier = "demandeChequier";

	constructor(
		//From Demande
		public id:number,
		public type_demande:String,
		public demande_traite:boolean,
		//---------------------
		public client:Client,
		public type_demande_client:String
	) { 
		super(id,type_demande,demande_traite);
	}

	static fromJson(json) {
		return new DemandeClient(
	    	json.id, 
	    	json.type_demande, 
	    	json.demande_traite, 
	    	json.client, 
	    	json.type_demande_client
		);
	}

	static defaultDemandeClient(){
		return DemandeClient.fromJson({
		    	id:null,
		    	type_demande:Demande.type_demande_client,
		    	demande_traite:false,
		    	client:Client.defaultClient(),
		    	type_demande_client:DemandeClient.type_demande_client_ouverture_compte
		    }
		);
	}

	static defaultListDemandes(){
		return new Array<DemandeClient>();
	}
}