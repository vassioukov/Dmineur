import { Injectable } from '@angular/core';
import { Address } from './address'; 

@Injectable() 
export class Utilisateur {
  public id: number, 
  public email: String, 
  public password: String,
  public pseudo: String,
  public firstName:String, 
  public lastName: String, 
  public dateOfBirth: Date,
  public mobile: String,
  public profile: String,
  public address: Address

  constructor(params: Utilisateur) { 
    Object.assign(this,params);
  }

  static fromJson(json) {
    return new Utilisateur(json.id, json.email, json.password, json.pseudo, json.firstName, json.lastName, json.dateOfBirth, json.mobile, json.profile, json.address);
  }

  static defaultUser(){
    return new Utilisateur(
      0, 
      "", 
      "", 
      "", 
      "", 
      "", 
      "", 
      "", 
      "", 
      Address.defaultAddress();
    );
  }
}