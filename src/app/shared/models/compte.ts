import {Client} from '../models/utilisateur/client';
import {Transaction} from './transactions';
export class Compte  {
	private rib : number;
	private description : String;
	private dateCreation : Date;
	private solde : number;
	/*
	private enum etatCompte {
		VALID,
		INVALID
	}*/
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