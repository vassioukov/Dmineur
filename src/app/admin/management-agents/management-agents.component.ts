import { Component, OnDestroy, OnInit } from '@angular/core';
import { fakeAgent } from '../../shared/models/fake-session/fakeAgent';
import { FAKEAGENTITEMS } from '../../shared/models/fake-session/fakeAgents';
import { Utilisateur } from '../../shared/models/utilisateur/utilisateur';
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
    users: Utilisateur[];
    userSubscription: Subscription;
    userForm;

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: Utilisateur[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onDeleteUser(user: Utilisateur) {
    this.userService.removeUser(user);
  }

  onEditUser(user: Utilisateur) {
    //this.userService.updateUser(user);
  }
   onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new Utilisateur(
      formValue['firstName'],
      formValue['lastName'],
      formValue['matricule'],
      formValue['email'],
      formValue['telephone']
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/admin/managementAgents']);
  }

}