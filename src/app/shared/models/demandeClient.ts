import {Utilisateur} from './utilisateur';
import {Client} from './client';
export class DemandeClient extends Utilisateur {
	private type_demande_client : String ;
	private client : Client ;

}