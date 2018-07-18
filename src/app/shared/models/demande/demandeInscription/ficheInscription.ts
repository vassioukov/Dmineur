import { Injectable } from '@angular/core';
import { Client } from '../../utilisateur/client';
import { Address } from '../../utilisateur/address';

@Injectable() 
export class FicheInscription {


  constructor(
    public numberOfChildren: number,
    public maritalStatus: number,
    public client:Client,
    public address:Address
    ) { }

  static fromJson(json) {
    return new FicheInscription(json.numberOfChildren,json.maritalStatus, json.client, json.address);
  }

  static defaultFicheInscription(){
    return FicheInscription.fromJson({
        numberOfChildren:0, 
        maritalStatus:0,
        client:Client.defaultClient(),
        address:Address.defaultAddress()
      }
    );
  }
}