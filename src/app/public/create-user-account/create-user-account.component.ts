import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-create-user-account',
	templateUrl: './create-user-account.component.html',
	styleUrls: ['./create-user-account.component.scss']
})
export class CreateUserAccountComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}
	creationCompteClient(dataClient) {

		localStorage.setItem("recupclient", JSON.stringify(dataClient.value));
	}
}
