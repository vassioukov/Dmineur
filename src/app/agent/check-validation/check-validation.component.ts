import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core-module/services/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-validation',
  templateUrl: './check-validation.component.html',
  styleUrls: ['./check-validation.component.css']
})
export class CheckValidationComponent implements OnInit {
	demandeChequiers;
	filter_demande_traite="all";

	constructor(private userService:UserService, private router:Router) { }

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

	ngOnInit() {
		this.userService.getDemandeChecks().subscribe(
			res => {
				this.demandeChequiers = res;
			}, err => {
				console.error(err);
			}
		);
	}

	
	goToDemande(demande_id){
		this.router.navigate(['/agent/request/'+demande_id], {fragment:"check"});
	}

}
