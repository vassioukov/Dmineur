import { Directive, Component, OnInit } from '@angular/core';
import { UserService } from '../../../core-module/services/userService/user.service';

import { Router } from '@angular/router';
import { Agent } from '../../../shared/models/utilisateur/agent';
import { Address } from '../../../shared/models/utilisateur/address';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

import { identityRevealedValidator } from './identity-revealed.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  id:number;
  agent:Agent = Agent.defaultAgent();
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    
      console.log(this.agent);
    this.userForm = new FormGroup({
      'firstName' : new FormControl(this.agent.firstName , [
        Validators.required]),
      'lastName' : new FormControl(this.agent.lastName , [
        Validators.required]),
      'email' : new FormControl(this.agent.email , [
        Validators.required,Validators.email]),
      'mobile' : new FormControl(this.agent.mobile , [
        Validators.required]),
      'registrationNumber' : new FormControl(this.agent.registrationNumber , [
        Validators.required]),
      'password': new FormControl(this.agent.password, [
        Validators.required,
        Validators.minLength(4),
        ]),
      'passwordVerif': new FormControl(this.agent.passwordVerif,[
        Validators.required,
        Validators.minLength(4),
        ]),
      /*
      'nomRue' : new FormControl(this.agent.address.nomRue , [
        Validators.required]),
      'cp' : new FormControl(this.agent.address.cp , [
        Validators.required]),
      'ville' : new FormControl(this.agent.address.ville , [
        Validators.required]),
      */
      'dateOfBirth' : new FormControl(this.agent.dateOfBirth , [
        Validators.required]),
      'dateStartContract' : new FormControl(this.agent.dateStartContract , [
        Validators.required]),
      /*
      'file' : new FormControl(this.agent.passwordVerif),
      'pseudo' : new FormControl(this.agent.pseudo , [
        Validators.required]),
        */

    }, { validators: identityRevealedValidator });

    this.userService.emitAgents();

    this.route.params.subscribe(
      queryParams=>{
        this.id=queryParams['id'];
        if(this.id!==undefined){
          this.userService.getAgent(queryParams['id']).subscribe(
            res => {
              this.agent = res;
            }, err => {
              console.error(err);
            }
          );
        }
        //this.initForm(this.agent);
    });




    this.initForm();
  }

  initForm() {
    /*
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      matricule: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['',[Validators.required, Validators.pattern('[0-9]+')]],
    });*/
  }

  submit(){
    if(this.id!==undefined){
      this.updateAgent();
    } else {
      this.createAgent();
    }
  }

  createAgent() {
    this.userService.addAgent(this.agent).subscribe(
      res => {
        this.router.navigate(['/admin/managementAgents']);
      }, err => {

      }
    );

    //this.router.navigate(['/admin/managementAgents']);
  }

  updateAgent() {
    this.agent.address = Address.defaultAddress();
    this.userService.updateAgent(this.agent).subscribe(
      res => {
        this.router.navigate(['/admin/managementAgents']);
      }, err => {

      }
    );

    //this.router.navigate(['/admin/managementAgents']);
  }

  



    get password() { return this.userForm.get('password'); }
    get passwordVerif() { return this.userForm.get('passwordVerif'); }
    get firstName() { return this.userForm.get('firstName'); }
    get lastName() { return this.userForm.get('lastName'); }
    get email() { return this.userForm.get('email'); }
    get mobile() { return this.userForm.get('mobile'); }
    /*
    get numRue() { return this.userForm.get('numRue'); }
    get nomRue() { return this.userForm.get('nomRue'); }
    get cp() { return this.userForm.get('cp'); }
    get ville() { return this.userForm.get('ville'); }
    */
    get dateOfBirth() { return this.userForm.get('dateOfBirth'); }
    get dateStartContract() { return this.userForm.get('dateStartContract'); }
    get registrationNumber() { return this.userForm.get('registrationNumber'); }
   // get file() { return this.userForm.get('file'); }
   // get pseudo() { return this.userForm.get('pseudo'); }
}