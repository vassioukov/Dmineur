import { Injectable } from '@angular/core';
import { Demande } from '../demande';
import { Client } from '../../utilisateur/client';

@Injectable() 
export class DemandeClient extends Demande {
	static readonly type_demande_client_MAJ_donnee = "demandeClientMAJDonnee";
	static readonly type_demande_client_ouverture_compte = "demandeOuvertureCompteBancaire";
	static readonly type_demande_client_chequier = "demandeClientChequier";

	constructor(
		//From Demande
		public id:number,
		public type_demande:String,
		public demande_traite:boolean,
		//---------------------
		public client:Client,
	) { 
		super(id,type_demande,demande_traite);
	}

	static fromJson(json) {
		return new DemandeClient(
	    	json.id, 
	    	json.type_demande, 
	    	json.demande_traite, 
	    	json.client
		);
	}

	static defaultDemandeClient(){
		return DemandeClient.fromJson({
		    	id:null,
		    	type_demande:DemandeClient.type_demande_client_ouverture_compte,
		    	demande_traite:false,
		    	client:Client.defaultClient()
		    }
		);
	}

	static defaultListDemandes(){
		return new Array<DemandeClient>();
	}
}