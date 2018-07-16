import { Component, OnDestroy, OnInit } from '@angular/core';
import { Utilisateur } from '../../shared/models/utilisateur/utilisateur';
import { Address } from '../../shared/models/utilisateur/address';
import { Agent } from '../../shared/models/utilisateur/agent';
import { Subscription } from 'rxjs';
import {UserService} from '../../core-module/services/userService/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-management-agents',
  templateUrl: './management-agents.component.html',
  styleUrls: ['./management-agents.component.css']
})

export class ManagementAgentsComponent implements OnInit {

  agents: Agent[];

  print=false;
  userSubscription: Subscription;
  userForm;

  constructor(private userService: UserService, 
              private router: Router, 
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log("here");
    this.getAllAgents();
    this.userService.emitAgents();
  }

  getAllAgents(){
    console.log("getAllAgents");
    this.userService.getAllAgents().subscribe(
      res => {
        this.agents= res;
      }, err => {
        console.error(err);
      }
      );
  }

  onDeleteAgent(agent: Agent) {
    this.userService.removeAgent(agent);
  }

  onEditAgent(i: number) {
    //this.userService.changeUser(i);
    this.router.navigate(["./admin/managementAgents/new-agent/"+i]);
  }

  toggle(){
    this.print=!this.print;
  }

  onDeleteConfirm(agent: Agent) {
    if(confirm('Etes-vous sûr de vouloir supprimer ce conseiller ?')) {
      this.onDeleteAgent(agent);
    } else {
      return null;
    }
  }
}
