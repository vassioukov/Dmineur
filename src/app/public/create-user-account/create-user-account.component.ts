import { Component, OnInit} from '@angular/core';
import { Utilisateur } from '../../shared/models/utilisateur';


@Component({
	selector: 'app-create-user-account',
	templateUrl: './create-user-account.component.html',
	styleUrls: ['./create-user-account.component.css']
})
export class CreateUserAccountComponent implements OnInit {
	user = new Utilisateur(null,null,null,null,null,null,null);
	constructor() { }

	ngOnInit() {
	}

	checkPass()
	{/*
		console.log(this.createClient);
		var champA = document.getElementById("password").value;
		var champB = document.getElementById("passwordVerif").value;
		var div_comp = document.getElementById("divcomp");

		if(champA == champB)
		{
			div_comp.innerHTML = "Correct";
		}
		else
		{
			div_comp.innerHTML = "Erreur !";
		}*/
	}

	creationCompteClient() {

		/*
		var clients = []; 
		var temp = localStorage.getItem("recupclient") == null?[]:JSON.parse(localStorage.getItem("recupclient")); 
		for(var i = 0, c = temp.length; i < c;i++){
			clients.push(temp[i]);
		}
		console.log(dataClient.value);
		clients.push(dataClient.value);
		localStorage.setItem("recupclient", JSON.stringify(clients));
		*/
	}
}
