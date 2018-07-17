import{Compte} from './compte';
export class Transaction  {

	/*
	public static final String transaction_debit = "débit";
	public static final String transaction_credit = "crédit";
	*/
	private id : number;
	private montantTransaction : number;
	private dateTransaction : Date;
	private type_transaction : number;
	private compte : Compte;
	constructor(id : number, montantTransaction : number, dateTransaction : Date, type_transaction : number) {
		this.id = id;
		this.montantTransaction = montantTransaction;
		this.dateTransaction = dateTransaction;
		this.type_transaction = type_transaction;
	}

}