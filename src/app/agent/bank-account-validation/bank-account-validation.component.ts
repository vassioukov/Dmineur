import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core-module/services/userService/user.service';
import { Router } from '@angular/router';
import { DemandeOuvertureCompte } from '../../shared/models/demande/demandeClient/demandeOuvertureCompte';

@Component({
  selector: 'app-bank-account-validation',
  templateUrl: './bank-account-validation.component.html',
  styleUrls: ['./bank-account-validation.component.css']
})
export class BankAccountValidationComponent implements OnInit {
	demandesOuvertureClientCompteBancaires:DemandeOuvertureCompte[];
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
          if(demande.demande_traite==true){
            hide = true;
          }
          break;
        case 'traitée':
          //La demande n'a pas été traité ? On le l'affiche pas
          if(demande.demande_traite==false){
            hide = true;
          }
          break;
      }
      return hide;
    }

	ngOnInit() {
		this.userService.getDemandeOuvertureClientCompteBancaires().subscribe(
			res => {
				console.log(res);
				this.demandesOuvertureClientCompteBancaires = res;
			}, err => {
				console.error(err);
			}
		);
	}

  
  goToDemande(demande_id){
    this.router.navigate(['/agent/request/'+demande_id], {fragment:"compteBancaire"});
  }
}
