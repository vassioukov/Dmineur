import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../../core-module/services/deviseService/devise.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
	currencies;
	currenciesKeys;

	devise = {};

	constructor(private deviseService:DeviseService) { }

	ngOnInit() {
		this.deviseService.getCurrencies().subscribe(res => {
		//Get all currency's type
	    this.currenciesKeys = Object.keys(res.results);
	    this.currencies = [];
	    for(let key in this.currenciesKeys){
	    	this.currencies.push(res.results[this.currenciesKeys[key]]);
	    }
	    console.log(this.currencies);
	  }, (err) => {
	    console.log(err);
	    alert("lobby.component deviseService error");
	  });
	}

}
