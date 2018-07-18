import {Client} from '../utilisateur/client';
import {Transaction} from './transactions';
export class Compte  {
	private rib : number;
	private description : String;
	public dateCreation : Date;
	private solde : number;
	private remunerateur : Boolean;
	private client : Client;
	private transactions :Array<Transaction>
		constructor(rib : number, description : String, dateCreation : Date, solde : number, remunerateur : Boolean) {
		this.rib = rib;
		this.description = description;
		this.dateCreation = dateCreation;
		this.solde = solde;
		this.remunerateur = remunerateur;;
	}


  static fromJson(json) {
    return new Compte(
      json.rib,
      json.description,
      json.dateCreation,
      json.solde,
      json.remunerateur
    );
  }
  
  static defaultCompte(){
    return Compte.fromJson({
        rib:null, 
        description:"", 
        dateCreation:new Date(), 
        solde:null,
        remunerateur:null
      }
    );
  }
}