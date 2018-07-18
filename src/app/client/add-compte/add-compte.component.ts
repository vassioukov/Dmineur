import { Component, OnInit } from '@angular/core';
import {Compte} from '../../shared/models/compte/compte';
import {UserService} from '../../core-module/services/userService/user.service';

@Component({
	selector: 'app-add-compte',
	templateUrl: './add-compte.component.html',
	styleUrls: ['./add-compte.component.css']
})
export class AddCompteComponent implements OnInit {
	compte:Compte = Compte.defaultCompte();

	constructor(private userService : UserService) { }

	ngOnInit() {
		
	}
	
	creationDemandeOuvertureCompte(){
		this.compte.dateCreation = new Date();
		this.userService.creationDemandeOuvertureCompte(this.compte).subscribe(
			res => {
				console.log("création compte ok");
			}, err => {
				console.error(err);
			}
		);
	}
}
