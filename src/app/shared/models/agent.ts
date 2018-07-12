import {Utilisateur} from './utilisateur';
import {Client} from './client';
export class Agent extends Utilisateur {
	private registrationNumber:number;
	private dateStartContract :Date;
	private clients :Array<Client> ;
	
}