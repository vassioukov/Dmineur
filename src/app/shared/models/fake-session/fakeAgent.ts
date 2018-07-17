import { Injectable } from '@angular/core';

@Injectable() 
export class fakeAgent {
	constructor(public _id: number, public prenom: String, public nom: String, public email: String, public password: String,
		public telephone: String, public profile: String) { 
	}

	static fromJson(json) {
		return new fakeAgent(json._id, json.prenom, json.nom, json.email, json.password, json.telephone, json.profile);
	}
}
