import { Injectable } from '@angular/core';

@Injectable() 
export class Demande {
  static readonly type_demande_inscription = "demandeInscription";
  static readonly type_demande_client = "demandeClient";


  constructor(
      public id:number,
      public type_demande:String,
      public demande_traite:boolean,
    ) { 
  }

  static fromJson(json) {
    return new Demande(json.id, json.type_demande, json.demande_traite);
  }

  static defaultDemande(){
    return Demande.fromJson({
        id: null,
        type_demande:null,
        demande_traite: 0
      }
    );
  }
}