import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

const apiUrlAllCurrencies = "https://free.currencyconverterapi.com/api/v5/currencies";

@Injectable({
	providedIn : 'root'
})
export class DeviseService {
	currencies;

	constructor(private http: HttpClient) {
		console.log("here");
	}

	ngOnInit(){
		//this.currencies = this.getCurrencies();
		console.log('this.currencies');
	}

	convert(){
		/*
		this.getCurrencies.subscribe(data => {

		})*/
	}

	getCurrencies():Observable<any>{
		return this.http.get(apiUrlAllCurrencies).pipe(
			map((res:HttpResponse<String>) => res),
			catchError((error:any) => Observable.throw(error.json().error || 'Error'))
		);
		/*
		return this.http.get("https://apirone.com/api/v1/ticker").pipe(
  			map((res:HttpResponse<String>) => res),
  			catchError((error:any) => Observable.throw(error.json().error || 'Error'))
  		);
  		*/
	}

}