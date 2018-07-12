import { Injectable } from '@angular/core';

@Injectable() 
export class fakeClient {
	constructor(public _id: number, public email: String, public pseudo: String, public firstName: String, public lastName: String,
		public dateOfBirth: Date, public mobile: String, public profile: String) { 
	}

	static fromJson(json) {
		return new fakeCLient(json._id, json.email, json.pseudo, json.firstName, json.lastName, json.dateOfBirth, json.mobile, json.profile);
	}
}
