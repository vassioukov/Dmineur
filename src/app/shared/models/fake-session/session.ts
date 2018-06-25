import { Injectable } from '@angular/core';

@Injectable() 
export class Session {
  constructor(public _id: number, /*public prenom: String,*/ public email: String, public password: String,
    /*public telephone: String,*/public profile: String) { 
  }

  static fromJson(json) {
    return new Session(json._id, json.email, json.password, json.profile);
  }
}
