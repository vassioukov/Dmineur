import { Component, OnInit } from '@angular/core';
import {Agent} from '../../shared/models/utilisateur/agent';
import {UserService} from '../../core-module/services/userService/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	agents: Agent[];

  constructor(private userService : UserService) { }

  ngOnInit() {
  	this.userService.getAllAgents().subscribe(
  		res => {
  			this.agents= res;
  		}, err => {
  			console.error(err);
  		}
  	);
  }

}
