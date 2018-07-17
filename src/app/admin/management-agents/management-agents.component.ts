import { Component, OnDestroy, OnInit } from '@angular/core';
import { fakeAgent } from '../../shared/models/fake-session/fakeAgent';
import { FAKEAGENTITEMS } from '../../shared/models/fake-session/fakeAgents';
import { User } from './models/users.modele';
import { Subscription } from 'rxjs';
//import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { Agent } from '../../shared/models/utilisateur/agent';
import { UserService } from '../../core-module/services/userService/user.service';


@Component({
  selector: 'app-management-agents',
  templateUrl: './management-agents.component.html',
  styleUrls: ['./management-agents.component.css']
})

export class ManagementAgentsComponent implements OnInit, OnDestroy {

  agents:Agent[];
  print=false;
  users: User[];
  agentsSubscription: Subscription;

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
    console.log("here");
    this.userService.getAllAgents().subscribe(
      res => {
        this.agents = res;
      }, err => {
        console.error(err);
      }
    )
    this.agentsSubscription = this.userService.agentsSubject.subscribe(
      (agents: Agent[]) => {
        this.agents = agents;
      }
    );
   // this.userService.emitUsers();
  }








  ngOnDestroy() {
    this.agentsSubscription.unsubscribe();
  }

  onDeleteConfirm(user: User) {
      if(confirm('Etes-vous sûr de vouloir supprimer ce conseiller ?')) {
        this.onDeleteUser(user);
      } else {
        return null;
      }
  }

  onDeleteUser(user: User) {
   // this.userService.removeUser(user);
  }

  onEditUser(i: number) {
    if(!this.print){
      this.toggle();
    }
    //this.userService.changeUser(i);
    this.router.navigate(["./admin/managementAgents/new-user/"+i]);
  }

  toggle(){
    this.print=!this.print;
  }
}