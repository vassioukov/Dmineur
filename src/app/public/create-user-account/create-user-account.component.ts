import { Directive, Component, OnInit} from '@angular/core';
import { Utilisateur } from '../../shared/models/utilisateur/utilisateur';
import { Client } from '../../shared/models/utilisateur/client';
import { FicheInscription } from '../../shared/models/demande/demandeInscription/ficheInscription';
import { UserService} from '../../core-module/services/userService/user.service';
import { Router } from '@angular/router';
import { FormControl, Validators, AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { identityRevealedValidator } from './identity-revealed.directive';


@Component({
	selector: 'app-create-user-account',
	templateUrl: './create-user-account.component.html',
	styleUrls: ['./create-user-account.component.css']
})
export class CreateUserAccountComponent implements OnInit {
	user = Client.defaultClient();
	constructor(private router: Router, private userService:UserService) { }

	hero = { password: '', passwordVerif: '' ,firstName:'',dateOfBirth:'' , lastName:'' ,email :'', mobile:'', numRue:'', nomRue:'', cp:'', ville:'',file:'',pseudo:''};

	heroFormSimple: FormGroup;
	heroForm: FormGroup;

	ngOnInit() {
		this.heroFormSimple = new FormGroup({
			'password': new FormControl(this.user.password, [
				Validators.required,
				Validators.minLength(4),
				]),
			'passwordVerif': new FormControl(this.user.passwordVerif, [
		        Validators.required,
		        Validators.minLength(4),
			]),
			'firstName' : new FormControl(this.user.firstName , [
				Validators.required]),
			'lastName' : new FormControl(this.user.lastName , [
				Validators.required]),
			'email' : new FormControl(this.user.email , [
				Validators.required]),
			'mobile' : new FormControl(this.user.mobile , [
				Validators.required]),
		}, { validators: identityRevealedValidator });

		this.heroForm = new FormGroup({
			'password': new FormControl(this.user.password, [
				Validators.required,
				Validators.minLength(4),
				]),
			'passwordVerif': new FormControl(this.user.passwordVerif, [
		        Validators.required,
		        Validators.minLength(4),
			]),
			'firstName' : new FormControl(this.user.firstName , [
				Validators.required]),
			'lastName' : new FormControl(this.user.lastName , [
				Validators.required]),
			'email' : new FormControl(this.user.email , [
				Validators.required]),
			'mobile' : new FormControl(this.user.mobile , [
				Validators.required]),
			'numRue' : new FormControl(this.user.address.numRue , [
				Validators.required]),
			'nomRue' : new FormControl(this.user.address.nomRue , [
				Validators.required]),
			'cp' : new FormControl(this.user.address.cp , [
				Validators.required]),
			'ville' : new FormControl(this.user.address.ville , [
				Validators.required]),
			'dateOfBirth' : new FormControl(this.user.dateOfBirth , [
				Validators.required]),
			/*
			'file' : new FormControl(this.user.file),
			*/
			'pseudo' : new FormControl(this.user.pseudo , [
				Validators.required]),
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
	/*
	get file() { return this.heroForm.get('file'); }
	*/
	get pseudo() { return this.heroForm.get('pseudo'); }

	creationCompteClientSimple() {
		//Copy the object
		let userToSave = Object.assign({},this.user);
		//Delete unnecessary property for saving
		delete (userToSave.passwordVerif);

		this.userService.createClient(userToSave).subscribe(
			res => {
				this.userService.setUserConnected(res);
				this.userService.routing();
			}, (err) => {
				console.error(err);
				alert("lobby.component convert.deviseService error");
			});
	}

	creationCompteClientComplet() {

		//Copy the object
		let userToSave:Client = Object.assign({},this.user);
		//Delete unnecessary property for saving
		delete (userToSave.passwordVerif);

		this.userService.createClient(userToSave).subscribe(
			res => {
				this.userService.setUserConnected(res);
				this.userService.routing();
			}, (err) => {
				console.error(err);
				alert("lobby.component convert.deviseService error");
			});
  	}

	onFileChange(event) {
		let reader = new FileReader();
		if(event.target.files && event.target.files.length > 0) {
			  let file = event.target.files[0];
			  reader.readAsDataURL(file);
			  reader.onload = () => {
			    console.log('onload')
			  };
		}
	}

}