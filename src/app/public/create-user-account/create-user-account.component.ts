import { Directive, Component, OnInit} from '@angular/core';
import { Utilisateur } from '../../shared/models/utilisateur/utilisateur';
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
	user = Utilisateur.defaultUser();
	constructor(private router: Router, private userService:UserService) { }

	hero = { password: '', passwordVerif: '' ,firstName:'',dateOfBirth:'' , lastName:'' ,email :'', mobile:'', numRue:'', nomRue:'', cp:'', ville:'',file:'',pseudo:''};

	heroFormSimple: FormGroup;
	heroForm: FormGroup;

	ngOnInit() {
		this.heroFormSimple = new FormGroup({
			'password': new FormControl(this.hero.password, [
				Validators.required,
				Validators.minLength(4),
				]),
			'passwordVerif': new FormControl(this.hero.passwordVerif, [
		        Validators.required,
		        Validators.minLength(4),
			]),
			'firstName' : new FormControl(this.hero.firstName , [
				Validators.required]),
			'lastName' : new FormControl(this.hero.lastName , [
				Validators.required]),
			'email' : new FormControl(this.hero.email , [
				Validators.required]),
			'mobile' : new FormControl(this.hero.mobile , [
				Validators.required]),
		}, { validators: identityRevealedValidator });

		this.heroForm = new FormGroup({
			'password': new FormControl(this.hero.password, [
				Validators.required,
				Validators.minLength(4),
				]),
			'passwordVerif': new FormControl(this.hero.passwordVerif, [
		        Validators.required,
		        Validators.minLength(4),
			]),
			'firstName' : new FormControl(this.hero.firstName , [
				Validators.required]),
			'lastName' : new FormControl(this.hero.lastName , [
				Validators.required]),
			'email' : new FormControl(this.hero.email , [
				Validators.required]),
			'mobile' : new FormControl(this.hero.mobile , [
				Validators.required]),
			'numRue' : new FormControl(this.hero.numRue , [
				Validators.required]),
			'nomRue' : new FormControl(this.hero.nomRue , [
				Validators.required]),
			'cp' : new FormControl(this.hero.cp , [
				Validators.required]),
			'ville' : new FormControl(this.hero.ville , [
				Validators.required]),
			'dateOfBirth' : new FormControl(this.hero.dateOfBirth , [
				Validators.required]),
			'file' : new FormControl(this.hero.passwordVerif),
			'pseudo' : new FormControl(this.hero.pseudo , [
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
	get file() { return this.heroForm.get('file'); }
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