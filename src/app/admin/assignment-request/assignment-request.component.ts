import { Component, OnInit } from '@angular/core';
import { UserService } from "../../core-module/services/userService/user.service"; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment-request',
  templateUrl: './assignment-request.component.html',
  styleUrls: ['./assignment-request.component.css']
})
export class AssignmentRequestComponent implements OnInit {
	demandesInscriptions;
  	constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  	this.userService.getAllDemandesInscriptions().subscribe(
  		res => {
  			this.demandesInscriptions = res;
  		},
  		err => {
  			console.error(err);
  		}
  	)
  }

  goToDemande(demande_id){
  	this.router.navigate(['/admin/request/'+demande_id]);
  }

}
