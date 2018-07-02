import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
	currencies = [
		{ currencyName : "Albanian Lek", currencySymbol:"Lek",id:"ALL" }
	];

	constructor() { 
	}

	ngOnInit() {
	}

}
