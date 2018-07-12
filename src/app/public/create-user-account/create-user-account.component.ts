import { Component, OnInit} from '@angular/core';
import { Utilisateur } from '../../shared/models/utilisateur/utilisateur';
import { UserService} from '../../core-module/services/userService/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create-user-account',
	templateUrl: './create-user-account.component.html',
	styleUrls: ['./create-user-account.component.css']
})
export class CreateUserAccountComponent implements OnInit {
	user = Utilisateur.defaultUser();
	constructor(private router: Router, private userService:UserService) { }

	ngOnInit() {
		//Define a second property password to check password equality
		this.user.passwordVerif;
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
		//Copy the object
		let userToSave = Object.assign({},this.user);
		//Delete unnecessary property for saving
		delete (userToSave.passwordVerif);

		this.userService.createClient(userToSave).subscribe(
			res => {
				this.userService.setUserConnected(res);
				this.userService.routing();
			}, (err) => {
				console.error(err);
				alert("lobby.component convert.deviseService error");
		});
	}
}
