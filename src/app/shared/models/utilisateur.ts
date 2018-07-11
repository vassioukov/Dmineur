import { Injectable } from '@angular/core';
import { Address } from './address'; 

@Injectable() 
export class Utilisateur {

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
      public passwordVerif: String
    ) { 

  }

  static fromJson(json) {
    return new Utilisateur(
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
      json.passwordVerif
    );
  }

  static defaultUser(){
    return Utilisateur.fromJson({
        id:null, 
        email:"", 
        password:"", 
        pseudo:"",
        firstName:"", 
        lastName:"", 
        dateOfBirth:new Date(), 
        mobile:"", 
        profile:"guest", 
        address:Address.defaultAddress(),
        passwordVerif:""
      }
    );
  }
}