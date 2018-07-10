import { Component, OnInit} from '@angular/core';
import { Utilisateur } from '../../shared/models/utilisateur';
import { UserService} from '../../core-module/services/userService/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create-user-account',
	templateUrl: './create-user-account.component.html',
	styleUrls: ['./create-user-account.component.css']
})
export class CreateUserAccountComponent implements OnInit {
	//user = new Utilisateur(null,null,null,null,null,null,null,null,null,null);
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
		console.log(this.user);
		//Copie the object
		let userToSave = Object.assign({},this.user);
		//Delete unnecessary property for saving
		delete (userToSave.passwordVerif);

		//Test mot de passe à faire
		this.userService.createClient(userToSave).subscribe(
			res => {
				console.log("res");
				console.log(res);
				res.firstName="AZEEZADQSWXC";
				this.userService.setUserConnected(res);
				this.userService.routing();
			}, (err) => {
				console.log(err);
				alert("lobby.component convert.deviseService error");
		});
	}
}
