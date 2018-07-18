import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../../core-module/services/deviseService/devise.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
})
export class LobbyComponent {
	imgprincipal: string = 'assets/images/logo/logo_496px.png';
	imgcarte: string = 'assets/images/carete.jpg';
	imgbanque : string ='assets/images/passez-a-la-banque-en-ligne1.jpg';
	imgfond : string ='assets/images/fond-degrade.jpg';

}