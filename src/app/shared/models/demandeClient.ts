import {Utilisateur} from '../models/utilisateur/utilisateur';
import {Client} from '../models/utilisateur/client';
export class DemandeClient extends Utilisateur {
	private type_demande_client : String ;
	private client : Client ;


}