import { Component, OnDestroy, OnInit } from '@angular/core';
import { fakeAgent } from '../../shared/models/fake-session/fakeAgent';
import { FAKEAGENTITEMS } from '../../shared/models/fake-session/fakeAgents';
import { User } from './models/users.modele';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-management-agents',
  templateUrl: './management-agents.component.html',
  styleUrls: ['./management-agents.component.css']
})

export class ManagementAgentsComponent implements OnInit, OnDestroy {

	  agentList:fakeAgent[] = FAKEAGENTITEMS;
    users: User[];
    userSubscription: Subscription;

  constructor(private userService: UserService) { }

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

}