import { Injectable } from '@angular/core';
import { Address } from './address'; 

@Injectable() 
export class Utilisateur {
  public id: number;
  public email: String;
  public password: String;
  public pseudo: String;
  public firstName:String;
  public lastName: String; 
  public dateOfBirth: Date;
  public mobile: String;
  public profile: String;
  public address: Address;
  public passwordVerif: String;


  constructor(params: Utilisateur) { 
    Object.assign(this,params);
  }

  static fromJson(json) {
    return new Utilisateur(json);
  }

  static defaultUser(){
    return new Utilisateur({
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