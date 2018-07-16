import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../../core-module/services/userService/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Agent } from '../../../shared/models/utilisateur/agent';
import { identityRevealedValidator } from './identity-revealed.directive';
@Component({
	selector: 'app-new-agent',
	templateUrl: './new-agent.component.html',
	styleUrls: ['./new-agent.component.css']
})
export class NewAgentComponent implements OnInit {

  @Output() someEvent = new EventEmitter<string>();


	id;
	
	user:Agent = Agent.defaultAgent();
	agentForm: FormGroup = new FormGroup({
            'password': new FormControl(this.user.password, [
                Validators.required,
                Validators.minLength(4),
                ]),
            'passwordVerif': new FormControl(this.user.passwordVerif),
            'firstName' : new FormControl(this.user.firstName , [
                Validators.required]),
            'lastName' : new FormControl(this.user.lastName , [
                Validators.required]),
            'email' : new FormControl(this.user.email , [
                Validators.required]),
            'registrationNumber' : new FormControl(this.user.registrationNumber , [
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
        }, { validators: identityRevealedValidator });

	constructor(private formBuilder: FormBuilder,
		private userService: UserService,
		private router: Router,
		private route: ActivatedRoute) { }

	ngOnInit() {


		this.route.params.subscribe(
			queryParams=>{
				this.id=queryParams['id'];
				this.userService.getAgent(this.id).subscribe(
					res => {
						this.user = res;
						console.log(this.user);
						this.initForm(this.user);
					}, err => {
						console.error(err);
					}
				);
			});

		
	}

	initForm(user) {
		if(user!=null){

			this.agentForm = this.formBuilder.group({
				email: [user.email, [Validators.required, Validators.email]],
				password: [user.password, Validators.required],
				pseudo: [user.pseudo, Validators.required],
				firstName: [user.firstName, Validators.required],
				lastName: [user.lastName, Validators.required],
				dateOfBirth: [user.dateOfBirth, Validators.required],
				mobile: [user.mobile,[Validators.required, Validators.pattern('[0-9]+')]], 
				profile: [user.lastName, Validators.required],
				address: [user.address, Validators.required],
				passwordVerif: [user.passwordVerif, Validators.required],
				registrationNumber: [user.registrationNumber, Validators.required],
				dateStartContract: [user.dateStartContract, Validators.required],  
			});
		} 
	}

	onSubmitForm() {
		const formValue = this.agentForm.value;
		const newAgent = new Agent(
			formValue['id'],
			formValue['email'],
			formValue['password'],
			formValue['pseudo'],
			formValue['firstName'],
			formValue['lastName'],
			formValue['dateOfBirth'],
			formValue['mobile'],
			formValue['profile'],
			formValue['address'],
			formValue['passwordVerif'],
			formValue['registrationNumber'],
			formValue['dateStartContract']
			);
		if (this.id == null) {
			this.userService.addAgent(newAgent).subscribe(
				res => {
					console.log(res);
				}, err => {
					console.error(err);
				}

			);
			this.router.navigate(['/admin/managementAgents']);
		}else{

			this.userService.changeAgent(this.id, newAgent);
			this.router.navigate(['/admin/managementAgents']);
		}
	}

	onEditAgent(i: number) {
    //this.userService.changeUser(i);
    	this.router.navigate(["./admin/managementAgents/new-agent/"+i]);
  }
}
