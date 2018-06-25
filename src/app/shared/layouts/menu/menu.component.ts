import { Component, Input, Output, OnInit } from '@angular/core';
import { collapse } from '../../animation/collapse-animate';
import { GlobalService } from '../../services/global.service';
import { UsersService } from '../../services/users.service';
import { Session } from '../../models/fake-session/session';
import { BehaviorSubject, Observable, of, Subscription} from 'rxjs';

@Component({
  selector: 'du-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [collapse],
  providers: [UsersService]
})
export class MenuComponent implements OnInit {
  @Input() menuInfo: any;
  
  userLogged: Session;

  test: Subscription

  constructor(private _globalService: GlobalService, private usersService: UsersService) { 
  }

  ngOnInit(){
    this.test = this.usersService.newUserConnected.subscribe((data) => {
    console.log("before menu");
    console.log(this.userLogged);
      this.userLogged = data;
    console.log("after menu");
    console.log(this.userLogged);
    console.log(this.usersService.getUserConnected());

    console.log("-------------");
    })
    this.usersService.somethingChanged.subscribe((data: any) => {
        console.log("Data from status component", data);
    })
  }

  public getUserConnected(): void {
    //this.usersService.getUserConnected().subscribe(userLogged => this.userLogged = userLogged);
  }

  private isToggleOn(item) {
    item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
  }

  private _selectItem(item) {
    //this._globalService._isActived(item);
    this._globalService.dataBusChanged('isActived', item);
  }
}