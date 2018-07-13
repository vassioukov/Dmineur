import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core-module/services/userService/user.service';
import { DemandeInscription } from '../../shared/models/demande/demandeInscription/demandeInscription';
import { FicheInscription } from '../../shared/models/demande/demandeInscription/ficheInscription';
import { Agent } from '../../shared/models/utilisateur/agent';
import { Client } from '../../shared/models/utilisateur/client';
import { Demande } from '../../shared/models/demande/demande';

@Component({
  selector: 'app-request-by-agent',
  templateUrl: './request-by-agent.component.html',
  styleUrls: ['./request-by-agent.component.css']
})
export class RequestByAgentComponent implements OnInit {
  request:any= {
    id:null,
    type_demande:null,
    demande_traite:null,
    ficheInscription:FicheInscription.defaultFicheInscription(),
    agent:Agent.defaultAgent(),
    client:Client.defaultClient(),
    type_demande_client:null
  };

  constructor(private route:ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
  	this.route.params.subscribe(
  		queryParams => {
        console.log(queryParams);
        switch(this.route.snapshot.fragment){
          case "compteBancaire":
            //Récupération de la demande grâce à l'id
            this.userService.getDemandeOuvertureClientCompteBancaire(queryParams['id']).subscribe(
              res => {
                this.request = res;
              },
              err => {
                console.error(err);
              });
            break;
          case "check":
            //Récupération de la demande grâce à l'id
            this.userService.getDemandeCheck(queryParams['id']).subscribe(
              res => {
                this.request = res;
                console.log(this.request);
              },
              err => {
                console.error(err);
              }
              );
            break;
          case "MAJ":
            //Récupération de la demande grâce à l'id
            this.userService.getDemandeMAJDonneeClient(queryParams['id']).subscribe(
              res => {
                this.request = res;
                console.log(this.request);
              },
              err => {
                console.error(err);
              }
              );
            break;
          case "inscription":
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
            break;
        }
      }
    )
  }
}
