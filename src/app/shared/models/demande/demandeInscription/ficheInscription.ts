import { Injectable } from '@angular/core';

@Injectable() 
export class FicheInscription {


  constructor(
    public numberOfChildren: number,
    public maritalStatus: number
    ) { }

  static fromJson(json) {
    return new FicheInscription(json.numberOfChildren,json.maritalStatus);
  }

  static defaultFicheInscription(){
    return FicheInscription.fromJson({
        numberOfChildren:null, 
        maritalStatus:null
      }
    );
  }
}