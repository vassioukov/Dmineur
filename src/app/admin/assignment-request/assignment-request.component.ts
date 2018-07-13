import { Component, OnInit } from '@angular/core';
import { UserService } from "../../core-module/services/userService/user.service"; 
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-assignment-request',
  templateUrl: './assignment-request.component.html',
  styleUrls: ['./assignment-request.component.css']
})
export class AssignmentRequestComponent implements OnInit {
	demandesInscriptions;
  filter_affectation:String="all";
  filter_demande_traite:String="all";
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  	constructor(private userService:UserService, private router:Router) { }

    hide(demande){
      let hide = false;
      switch(this.filter_affectation){
        case 'all':
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
          break;
        case 'affected':
          switch(this.filter_demande_traite){
            case 'all':
              if(demande.agent==null){
                hide = true;
              }
              break;
            case 'enCours':
              //La demande a été traité ? On le l'affiche pas
              if(demande.agent==null){
                hide = true;
              } else {
                //Demande traite, on ne l'affiche pas
                if(demande.demande_traite==1){
                  hide = true;
                }
              }
              break;
            case 'traitée':
              //La demande n'a pas été traité ? On le l'affiche pas
              if(demande.agent==null){
                hide = true;
              } else {
                //Demande en cours, on ne l'affiche pas
                if(demande.demande_traite==0){
                  hide = true;
                }
              }
              break;
          }
          break;
        case 'nonAffected':
          switch(this.filter_demande_traite){
            case 'all':
              if(demande.agent!=null){
                hide = true;
              }
              break;
            case 'enCours':
              //La demande a été traité ? On le l'affiche pas
              if(demande.agent!=null){
                hide = true;
              } else {
                //Demande traite, on ne l'affiche pas
                if(demande.demande_traite==1){
                  hide = true;
                }
              }
              break;
            case 'traitée':
              //La demande n'a pas été traité ? On le l'affiche pas
              if(demande.agent!=null){
                hide = true;
              } else {
                //Demande en cours, on ne l'affiche pas
                if(demande.demande_traite==0){
                  hide = true;
                }
              }
              break;
          }
      }
      return hide;
    }

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
