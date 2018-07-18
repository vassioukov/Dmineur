import { Injectable } from '@angular/core';

@Injectable() 
export class Address {
  constructor(
    public id:number,
    public numRue: number,
    public nomRue: String,
    public cp: String,
    public ville: String
    ) { 
  }

  static fromJson(json) {
    return new Address(json.id, json.numRue, json.nomRue, json.cp, json.ville);
  }

  static defaultAddress(){
    return Address.fromJson({
        id : null,
        numRue : null,
        nomRue : "",
        cp : "",
        ville : ""
      }
    ); 
  }
}