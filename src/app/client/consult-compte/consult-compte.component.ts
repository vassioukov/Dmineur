import { Component, OnInit } from '@angular/core';
import { Compte } from '../../shared/models/compte/compte';
import {UserService} from '../../core-module/services/userService/user.service';

@Component({
  selector: 'app-consult-compte',
  templateUrl: './consult-compte.component.html',
  styleUrls: ['./consult-compte.component.css']
})
export class ConsultCompteComponent implements OnInit {

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
}

