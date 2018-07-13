import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core-module/services/userService/user.service';
import { DemandeInscription } from '../../shared/models/demande/demandeInscription/demandeInscription';
import { Agent } from '../../shared/models/utilisateur/agent';

@Component({
  selector: 'app-request-by-agent',
  templateUrl: './request-by-agent.component.html',
  styleUrls: ['./request-by-agent.component.css']
})
export class RequestByAgentComponent implements OnInit {
  request = DemandeInscription.defaultDemandeInscription();

  constructor(private route:ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
  	this.route.params.subscribe(
  		queryParams => {
        //Récupération de la demande grâce à l'id
  			this.userService.getDemandeInscriptionByAgent(queryParams['id']).subscribe(
  				res => {
            this.request = res;
            console.log(this.request);
  				},
  				err => {
  					console.error(err);
  				}
  				);
  		}
  	);
  }

}
