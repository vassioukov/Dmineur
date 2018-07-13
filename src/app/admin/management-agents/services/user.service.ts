import { Utilisateur } from '../../../shared/models/utilisateur/utilisateur';
import { Subject } from 'rxjs';

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
}


