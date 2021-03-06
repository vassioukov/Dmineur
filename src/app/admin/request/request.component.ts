import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core-module/services/userService/user.service';
import { DemandeInscription } from '../../shared/models/demande/demandeInscription/demandeInscription';
import { Agent } from '../../shared/models/utilisateur/agent';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  request = DemandeInscription.defaultDemandeInscription();
  agents = new Array<Agent>();
  constructor(private route:ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllAgents().subscribe(
      res=> {
        this.agents = res;
      },
      err=> {
          console.error(err);
        }
      );
  	this.route.params.subscribe(
  		queryParams => {
        //Récupération de la demande grâce à l'id
  			this.userService.getDemandeInscription(queryParams['id']).subscribe(
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

  affect(){
    console.log(this.request);
    this.request.agent.firstName="YOLOOOOOO";
    this.userService.setAgentToRequestInscription(this.request).subscribe(
      res => {
        console.log(res);
      }, err => {
        console.log(err);
      }
    );
  }
}
