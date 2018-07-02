import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

const apiUrl = "https://free.currencyconverterapi.com/api/v5";
const allCurrenciesPath = "/currencies";
//Replace XXX and YYY by a currency id
const convertPath = "/convert?q=XXX_YYY&compact=ultra";

@Injectable({
	providedIn : 'root'
})
export class DeviseService {
	currencies;

	constructor(private http: HttpClient) {
	}

	ngOnInit(){
	}

	//Get all currencies available for conversion
	getCurrencies():Observable<any>{
		return this.http.get(apiUrl+allCurrenciesPath).pipe(
			map((res:HttpResponse<String>) => {
				//Get all the keys
			    let currenciesKeys = Object.keys(res["results"]);
			    let currencies = [];
			    for(let key in currenciesKeys){
			    	//Fill an array of each object
			    	currencies.push(res["results"][currenciesKeys[key]]);
			    }
			    //Return an array of objects
			    return currencies;
			}),
			catchError((error:any) => Observable.throw(error.json().error || 'Error'))
		);
	}

	//Convert a number from a currency to another
	convert(datas){
		//Replace XXX by source id and YYY by target id
		return this.http.get(apiUrl+convertPath.replace("XXX",datas.source).replace("YYY",datas.target)).pipe(
			map((res:HttpResponse<String>) => {
				//res is like res.XXX_YYY where XXX and YYY are currency id
				//Object.keys(res)[0] get all the keys of res and use the first one (index 0)
				//rounded to 3 decimals after point
				return Math.round(datas.sourceAmount*res[Object.keys(res)[0]]*1000)/1000;
			}),
			catchError((error:any) => {
				return Observable.throw(error.json().error || 'Error');
			})
		);
	}

}