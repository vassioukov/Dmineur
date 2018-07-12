import { Injectable } from '@angular/core';
import { Utilisateur } from './utilisateur';
import { Address } from './address'; 
import { DemandeClient } from '../demande/DemandeClient/demandeClient';

@Injectable() 
export class Client extends Utilisateur {
  
  constructor(
      public id: number,
      public email: String,
      public password: String,
      public pseudo: String,
      public firstName:String,
      public lastName: String,
      public dateOfBirth: Date,
      public mobile: String,
      public profile: String,
      public address: Address,
      public passwordVerif: String,
      public active:boolean,
      public demandes:Array<DemandeClient>,
      //public demandes:Array<Compte>
    ) { 
    super(id, email, password, pseudo, firstName, lastName, dateOfBirth, mobile, profile, address, passwordVerif);
  }

  static fromJson(json) {
    return new Client(
      json.id,
      json.email,
      json.password,
      json.pseudo,
      json.firstName,
      json.lastName,
      json.dateOfBirth,
      json.mobile,
      json.profile,
      json.address,
      json.passwordVerif,
      json.active,
      json.demandes
    );
  }
  
  static defaultClient(){
    return Client.fromJson({
        id:null, 
        email:"", 
        password:"", 
        pseudo:"",
        firstName:"", 
        lastName:"", 
        dateOfBirth:new Date(), 
        mobile:"", 
        profile:Utilisateur.profile_client, 
        address:Address.defaultAddress(),
        passwordVerif:"",
        demandes: new Array<DemandeClient>()
      }
    );
  }
}