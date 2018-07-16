import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../../../core-module/services/deviseService/devise.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
	//Two-way binding on them
	currencyForm;
	currencies;		//Contains every currencies object
	currenciesKeys; //Contains every currencies id 

	currency = {
		sourceAmount:null,
		targetAmount:null,
		sourceCurrency:null,
		targetCurrency:null
	};

	constructor(private deviseService:DeviseService) { }

	ngOnInit() {
		this.deviseService.getCurrencies().subscribe(
			res => {
			    this.currencies = res;
			}, (err) => {
				console.log(err);
				alert("lobby.component getCurrencies.deviseService error");
			});
		}

	onSubmit(){
		this.deviseService.convert(this.currency).subscribe(
			res => {
				this.currency.targetAmount = res;
			}, (err) => {
				console.log(err);
				alert("lobby.component convert.deviseService error");
			}
		);
	}
}
