import { Injectable } from '@angular/core';
import { DemandeClient } from './demandeClient';
import { Demande } from '../demande';
import { Client } from '../../utilisateur/client';

@Injectable() 
export class DemandeChequier extends DemandeClient {


  constructor(
      //From Demande
  		public id:number,
  		public type_demande:String,
  		public demande_traite:boolean,
      //From DemandeClient
  		public client:Client
  	) { 
  	super(id,type_demande,demande_traite,client);
  }

  static fromJson(json) {
    return new DemandeChequier(
    	json.id, 
    	json.type_demande, 
    	json.demande_traite, 
    	json.client
    );
  }

  static defaultDemandeChequier(){
    return DemandeChequier.fromJson({
      	id:null,
      	type_demande:DemandeClient.type_demande_client_ouverture_compte,
      	demande_traite:false,
      	client:Client.defaultClient()
      }
    );
  }
}