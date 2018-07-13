import { Component, OnDestroy, OnInit } from '@angular/core';
import { fakeAgent } from '../../shared/models/fake-session/fakeAgent';
import { FAKEAGENTITEMS } from '../../shared/models/fake-session/fakeAgents';
import { User } from './models/users.modele';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-agents',
  templateUrl: './management-agents.component.html',
  styleUrls: ['./management-agents.component.css']
})

export class ManagementAgentsComponent implements OnInit, OnDestroy {

	  agentList:fakeAgent[] = FAKEAGENTITEMS;
    print=false;
    users: User[];
    userSubscription: Subscription;

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onDeleteUser(user: User) {
    this.userService.removeUser(user);
  }

  onEditUser(i: number) {
    //this.userService.changeUser(i);
    this.router.navigate(["./admin/managementAgents/new-user/"+i]);
  }

  toggle(){
    this.print=!this.print;
  }

  onDeleteConfirm(user: User) {
    if(confirm('Etes-vous sûr de vouloir supprimer ce conseiller ?')) {
      this.onDeleteUser(user);
    } else {
      return null;
    }
}
}