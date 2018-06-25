import { Component, Input } from '@angular/core';
import { collapse } from '../../animation/collapse-animate';
import { GlobalService } from '../../services/global.service';
import { UserService } from '../../../core-module/services/user.service';
import { Session } from '../../models/fake-session/session';
import { BehaviorSubject, Observable, of, Subscription} from 'rxjs';

@Component({
  selector: 'du-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [collapse]
})
export class MenuComponent implements OnInit {
  @Input() menuInfo: any;
  
  userLogged: Session;

  userConnectedSubscribed : Subscription

  constructor(private _globalService: GlobalService, private userService: UserService) { 
    this.userLogged = this.userService.getUserConnected();
  }

  public onChange(session: Session){
    this.userLogged = session;
  }

  private isToggleOn(item) {
    item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
  }

  private _selectItem(item) {
    //this._globalService._isActived(item);
    this._globalService.dataBusChanged('isActived', item);
  }
}