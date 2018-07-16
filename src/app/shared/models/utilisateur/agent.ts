import { Injectable } from '@angular/core';
import { Utilisateur } from './utilisateur';
import { Address } from './address'; 

@Injectable() 
export class Agent extends Utilisateur {


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
      public registrationNumber: number,
      public dateStartContract: Date
    ) { 
    super(id, email, password, pseudo, firstName, lastName, dateOfBirth, mobile, profile, address, passwordVerif);
  }

  static fromJson(json) {
    return new Agent(
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
      json.registrationNumber,
      json.dateStartContract
    );
  }
  
  static defaultAgent(){
    return Agent.fromJson({
        id:null, 
        email:"", 
        password:"", 
        pseudo:"",
        firstName:"", 
        lastName:"", 
        dateOfBirth:new Date(), 
        mobile:"", 
        profile:Utilisateur.profile_agent, 
        address:Address.defaultAddress(),
        passwordVerif:"",
        registrationNumber:"00000",
        dateStartContract:new Date()
      }
    );
  }
  
}