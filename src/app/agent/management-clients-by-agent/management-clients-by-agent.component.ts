import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core-module/services/userService/user.service';
import { DemandeInscription } from '../../shared/models/demande/demandeInscription/demandeInscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-clients-by-agent',
  templateUrl: './management-clients-by-agent.component.html',
  styleUrls: ['./management-clients-by-agent.component.css']
})
export class ManagementClientsByAgentComponent implements OnInit {
	filter_demande_traite="all";
	demandesInscriptions:DemandeInscription[];
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

	goToDemande(demande_id){
		this.router.navigate(['/agent/request/'+demande_id]);
	}
}
