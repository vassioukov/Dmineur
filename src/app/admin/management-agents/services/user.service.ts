import { User } from '../models/users.modele';
import { Subject } from 'rxjs';
import { NewUserComponent } from '../new-user/new-user.component'

export class UserService {
  private users: User[] = [{
  	firstName: 'Vincent',
  	lastName: 'Vallet',
  	matricule: '01',
  	email: 'vincent.vallet@me.com',
  	telephone: '0660697060'
   },
   {
  	firstName: 'Alexandre',
  	lastName: 'Machin',
  	matricule: '02',
  	email: 'alexandre@gmail.com',
  	telephone: '0601020304'
   },
   {
    firstName: 'Kevin',
    lastName: 'Truc',
    matricule: '03',
    email: 'kevin@me.com',
    telephone: '0504150584'
   },
   {
    firstName: 'Ines',
    lastName: 'Muche',
    matricule: '04',
    email: 'ines@gmail.com',
    telephone: '0215515748'
   }
   ];

  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

  removeUser(user: User) {
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

   changeUser(i: number){
     console.log(this.users[i])
    
  }

}


