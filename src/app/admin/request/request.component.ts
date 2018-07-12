import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core-module/services/userService/user.service';
import { DemandeInscription } from '../../shared/models/demande/demandeInscription/demandeInscription';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  request = DemandeInscription.defaultDemandeInscription();
  constructor(private route:ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
  	this.route.params.subscribe(
  		queryParams => {
  			this.userService.getDemandeInscription(queryParams['id']).subscribe(
  				res => {
            this.request = res;
  					console.log("requestComponent");
  					console.log(res);
  				},
  				err => {
  					console.log("requestComponent");
  					console.log(err);
  				}
  				);
  		}
  	);
  }

}
