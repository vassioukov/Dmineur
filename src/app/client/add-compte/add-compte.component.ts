import { Component, OnInit } from '@angular/core';
import {Compte} from '../../shared/models/compte/compte';
import {UserService} from '../../core-module/services/userService/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
	selector: 'app-add-compte',
	templateUrl: './add-compte.component.html',
	styleUrls: ['./add-compte.component.css']
})
export class AddCompteComponent implements OnInit {
	compte:Compte = Compte.defaultCompte();

	constructor(private userService : UserService,
		        private router: Router,
		        private route: ActivatedRoute) { }

	ngOnInit() {
		
	}
	
	creationDemandeOuvertureCompte(){
		this.userService.creationDemandeOuvertureCompte(this.compte).subscribe(
			res => {
				console.log(res);
			}, err => {
				console.error(err);
			}
		);
	}
}
