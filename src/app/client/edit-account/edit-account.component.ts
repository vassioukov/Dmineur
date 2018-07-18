import { Directive, Component, OnInit} from '@angular/core';
import { Client } from '../../shared/models/utilisateur/client';
import { UserService} from '../../core-module/services/userService/user.service';
import { Router } from '@angular/router';
import { FormControl, Validators, AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { identityRevealedValidator } from './identity-revealed.directive';
import { Address } from '../../shared/models/utilisateur/address';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
	client:Client = Client.defaultClient();

	constructor(private userService:UserService) { }


	updateClient(){
		this.userService.updateClient(this.client).subscribe(
			res => {
				console.log(res);
			}, err => {
				console.error(err);
			}
		);
	}



	heroFormSimple: FormGroup;
	heroForm: FormGroup;

	ngOnInit() {
		let userConnected = this.userService.getUserConnected();
		this.userService.getClient(userConnected.id).subscribe(
			res => {
				this.client = res;
				console.log(this.client.address==null);
				if(this.client.address==null){
					this.client.address = Address.defaultAddress();
				}
			}, err => {
				console.error(err);
			}
		);

		this.heroFormSimple = new FormGroup({
			'password': new FormControl(this.client.password, [
				Validators.required,
				Validators.minLength(4),
				]),
			'passwordVerif': new FormControl(this.client.passwordVerif, [
		        Validators.required,
		        Validators.minLength(4),
			]),
			'firstName' : new FormControl(this.client.firstName , [
				Validators.required]),
			'lastName' : new FormControl(this.client.lastName , [
				Validators.required]),
			'email' : new FormControl(this.client.email , [
				Validators.required]),
			'mobile' : new FormControl(this.client.mobile , [
				Validators.required]),
		}, { validators: identityRevealedValidator });

		this.heroForm = new FormGroup({
			'password': new FormControl(this.client.password, [
				Validators.required,
				Validators.minLength(4),
				]),
			'passwordVerif': new FormControl(this.client.passwordVerif, [
		        Validators.required,
		        Validators.minLength(4),
			]),
			'firstName' : new FormControl(this.client.firstName , [
				Validators.required]),
			'lastName' : new FormControl(this.client.lastName , [
				Validators.required]),
			'email' : new FormControl(this.client.email , [
				Validators.required]),
			'pseudo' : new FormControl(this.client.pseudo , [
				Validators.required]),
			'mobile' : new FormControl(this.client.mobile , [
				Validators.required]),
			'numRue' : new FormControl(this.client.address.numRue , [
				Validators.required]),
			'nomRue' : new FormControl(this.client.address.nomRue , [
				Validators.required]),
			'cp' : new FormControl(this.client.address.cp , [
				Validators.required]),
			'ville' : new FormControl(this.client.address.ville , [
				Validators.required]),
			'dateOfBirth' : new FormControl(this.client.dateOfBirth , [
				Validators.required]),
			/*
			'file' : new FormControl(this.client.passwordVerif),
			*/
		}, { validators: identityRevealedValidator });
	}

	get password() { return this.heroForm.get('password'); }
	get passwordVerif() { return this.heroForm.get('passwordVerif'); }
	get firstName() { return this.heroForm.get('firstName'); }
	get lastName() { return this.heroForm.get('lastName'); }
	get email() { return this.heroForm.get('email'); }
	get mobile() { return this.heroForm.get('mobile'); }
	get numRue() { return this.heroForm.get('numRue'); }
	get nomRue() { return this.heroForm.get('nomRue'); }
	get cp() { return this.heroForm.get('cp'); }
	get ville() { return this.heroForm.get('ville'); }
	get dateOfBirth() { return this.heroForm.get('dateOfBirth'); }
	get file() { return this.heroForm.get('file'); }
	get pseudo() { return this.heroForm.get('pseudo'); }

}
