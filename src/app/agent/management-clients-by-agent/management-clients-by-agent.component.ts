import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core-module/services/userService/user.service';
import { DemandeInscription } from '../../shared/models/demande/demandeInscription/demandeInscription';
import { DemandeMAJDonnee } from '../../shared/models/demande/demandeClient/demandeMAJDonnee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-clients-by-agent',
  templateUrl: './management-clients-by-agent.component.html',
  styleUrls: ['./management-clients-by-agent.component.css']
})
export class ManagementClientsByAgentComponent implements OnInit {
  filter_demande_traite="all";
  filter_demande_maj_traite="all";

  demandesInscriptions:DemandeInscription[];
  demandesMAJDonnees:DemandeMAJDonnee[];
	constructor(private userService:UserService, private router:Router) { }

	ngOnInit() {
		this.userService.getAgentDemandesInscriptions().subscribe(
			res=>{
				this.demandesInscriptions = res;
			},
			err => {
				console.error(err);
			}
		);

    this.userService.getDemandeMAJDonneeClients().subscribe(
      res=>{
        this.demandesMAJDonnees = res;
      },
      err => {
        console.error(err);
      }
    );
	}

	hide(demande){
      let hide = false;

      switch(this.filter_demande_traite){
        case 'all':
          //Nothing todo
          break;
        case 'enCours':
          //La demande a été traité ? On le l'affiche pas
          if(demande.demande_traite==1){
            hide = true;
          }
          break;
        case 'traitée':
          //La demande n'a pas été traité ? On le l'affiche pas
          if(demande.demande_traite==0){
            hide = true;
          }
          break;
      }
      return hide;
    }

    hide_MAJ(demande){
      let hide = false;

      switch(this.filter_demande_maj_traite){
        case 'all':
          //Nothing todo
          break;
        case 'enCours':
          //La demande a été traité ? On le l'affiche pas
          if(demande.demande_traite==1){
            hide = true;
          }
          break;
        case 'traitée':
          //La demande n'a pas été traité ? On le l'affiche pas
          if(demande.demande_traite==0){
            hide = true;
          }
          break;
      }
      return hide;
    }

  goToDemandeInscription(demande_id){
    //Pouvoir envoyer "MAJ" ou "inscription"
    this.router.navigate(['/agent/request/'+demande_id], {fragment:"inscription"});
  }

  goToDemandeMAJ(demande_id){
    //Pouvoir envoyer "MAJ" ou "inscription"
    this.router.navigate(['/agent/request/'+demande_id], {fragment:"MAJ"});
  }
}
