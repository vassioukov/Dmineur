import { Injectable } from '@angular/core';

@Injectable() 
export class OldUtilisateur {
  constructor(public _id: number, public nom:String, public prenom: String, public email: String, public password: String,
    public telephone: String,public profile: String) { 
  }

  static fromJson(json) {
    return new OldUtilisateur(json._id, json.nom, json.prenom, json.email, json.password, json.telephone, json.profile);
  }
}
