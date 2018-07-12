import { Injectable } from '@angular/core';

@Injectable() 
export class Address {
  constructor(
    public numRue: number,
    public nomRue: String,
    public cp: String,
    public ville: String
    ) { 
  }

  static fromJson(json) {
    return new Address(json.numRue, json.nomRue, json.cp, json.ville);
  }

  static defaultAddress(){
    return new Address(null, "", "", ""); 
  }
}