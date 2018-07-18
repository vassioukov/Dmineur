import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core-module/services/userService/user.service';
import { Compte } from '../../shared/models/compte/compte';

@Component({
  selector: 'app-commande-chequier',
  templateUrl: './commande-chequier.component.html',
  styleUrls: ['./commande-chequier.component.css']
})
export class CommandeChequierComponent implements OnInit {

 compte:Compte = Compte.defaultCompte();
  comptes: Compte[];
  constructor(private userService : UserService) { }

  ngOnInit() {
  	this.userService.getCompteClient().subscribe(
  		res => {
  			this.comptes= res;
  		}, err => {
  			console.error(err);
  		}
  	);
  }
  creationDemandeChequier(){
  	this.userService.creationDemandeChequier(this.compte).subscribe(
			res => {
				console.log(res);
			}, err => {
				console.error(err);
			}
		);
  }

}
