import { Injectable } from '@angular/core';
import { FicheInscription } from './ficheInscription';
import { Demande } from '../demande';
import { Agent } from '../../utilisateur/agent';
import { Client } from '../../utilisateur/client';

@Injectable() 
export class DemandeInscription extends Demande {

	constructor(
		//From Demande
		public id:number,
		public type_demande:String,
		public demande_traite:boolean,
		//---------------------
		public ficheInscription:FicheInscription,
		public agent:Agent,
		public client:Client
		) { 
		super(id, type_demande, demande_traite);
	}

	static fromJson(json) {
		return new DemandeInscription(json.id,json.type_demande,json.demande_traite,json.ficheInscription, json.agent, json.client);
	}

	static defaultDemandeInscription(){
		return DemandeInscription.fromJson({
				id:null,
				type_demande:Demande.type_demande_inscription,
				demande_traite:0,
				ficheInscription:FicheInscription.defaultFicheInscription(),
				agent:Agent.defaultAgent(),
				client:Client.defaultClient()
			}
		);
	}

	getFicheInscription():FicheInscription{
		return this.ficheInscription;
	}
	setFicheInscription(ficheInscription){
		this.ficheInscription = ficheInscription;
	}

	getAgent():Agent{
		return this.agent;
	}
	setAgent(agent){
		this.agent = agent;
	}

	getClient():Client{
		return this.client;
	}
	setClient(client){
		this.client = client;
	}
}