import { Utilisateur } from '../../../shared/models/utilisateur/utilisateur';
import { Subject } from 'rxjs';
import { NewUserComponent } from '../new-user/new-user.component'

export class UserService {
  private users: Utilisateur[] = [
    Utilisateur.defaultUser(),
    Utilisateur.defaultUser(),
    Utilisateur.defaultUser(),
    Utilisateur.defaultUser(),
  ];

  userSubject = new Subject<Utilisateur[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: Utilisateur) {
    this.users.push(user);
    this.emitUsers();
  }

  removeUser(user: Utilisateur) {
    const userIndexToRemove = this.users.findIndex(
      (userEl) => {
        if(userEl === user) {
          return true;
        }
      }
      );
    this.users.splice(userIndexToRemove, 1);
    this.emitUsers();
  }
<<<<<<< HEAD
=======

   changeUser(i: number){
     return this.users[i];
  }

>>>>>>> 046f75128047d7d07efa5462a07b9ebfd0722557
}


