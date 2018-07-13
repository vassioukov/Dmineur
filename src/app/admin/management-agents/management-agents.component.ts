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
<<<<<<< HEAD
    users: Utilisateur[];
=======
    print=false;
    users: User[];
>>>>>>> 046f75128047d7d07efa5462a07b9ebfd0722557
    userSubscription: Subscription;
    userForm;

<<<<<<< HEAD
  constructor(private userService: UserService, private router:Router) { }
=======
  constructor(private userService: UserService,private router: Router) { }
>>>>>>> 046f75128047d7d07efa5462a07b9ebfd0722557

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

<<<<<<< HEAD
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

=======
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
>>>>>>> 046f75128047d7d07efa5462a07b9ebfd0722557
}