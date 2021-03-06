import { Injectable } from '@angular/core';
import { Utilisateur } from './utilisateur';
import { Address } from './address'; 

@Injectable() 
export class Admin extends Utilisateur {


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
      public fonction: String,
      public dateStartContract: Date
    ) { 
    super(id, email, password, pseudo, firstName, lastName, dateOfBirth, mobile, profile, address, passwordVerif);
  }

  static fromJson(json) {
    return new Admin(
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
      json.fonction,
      json.dateStartContract
    );
  }
  
  static defaultAdmin(){
    return Admin.fromJson({
        id:null, 
        email:"", 
        password:"", 
        pseudo:"",
        firstName:"", 
        lastName:"", 
        dateOfBirth:new Date(), 
        mobile:"", 
        profile:Utilisateur.profile_admin, 
        address:Address.defaultAddress(),
        passwordVerif:"",
        fonction:"Administrateur toussa toussa",
        dateStartContract:new Date()
      }
    );
  }

}