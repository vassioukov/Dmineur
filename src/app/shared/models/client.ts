import {Utilisateur} from './utilisateur';
import {Compte}from './compte';
import {DemandeClient}from './demandeClient';
import {Address} from './address';

export class Client extends Utilisateur {

	private comptes :Array<Compte>;
	private demandes : Array<DemandeClient>;
	constructor(id : number, email: :String, password : String, pseudo : String, firstName : String, lastName : String,
		dateOfBirth : Date, mobile :  String, profile : string, address : Address,comptes : Array<Compte>,demandes : Array<DemandeClient>
			//, Agent agent
			) {
		super(id, email, password, pseudo, firstName, lastName, dateOfBirth, mobile, profile, address);

		this.comptes = comptes;
		this.demandes = demandes;


	}