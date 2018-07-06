import { Component, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { UserService } from '../../../core-module/services/userService/user.service'; 

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent {
  //avatarImgSrc: string = 'assets/images/logo/logo_94px.png';
  avatarImgSrc: string = 'assets/images/LOGO_BANK_DMINEUR1.png';
  userName: String = this.userService.userConnected.email;
  userPost: string = 'Musician, Player';
  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };

  constructor(private _globalService: GlobalService, private userService: UserService) { 
  
  }

  //Return true if connected, false if not
  public isConnected():boolean{
    return this.userService.isConnected;
  }

  public _sidebarToggle() {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }
}
