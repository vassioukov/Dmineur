import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { UserService } from '../../../core-module/services/userService/user.service'; 
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { Router } from '@angular/router';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent implements OnInit {
  //avatarImgSrc: string = 'assets/images/logo/logo_94px.png';
  avatarImgSrc: string = 'assets/images/LOGO_BANK_DMINEUR1.png';
  userName: String = this.userService.userConnected.email;
  userPost: string = 'Musician, Player';
  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };
  showNotifications:Boolean = false;
  initializationSubscriber;
  notificationSubscriber=null;
  notificationDemandeInscriptions=new Array();

  constructor(private _globalService: GlobalService, private userService: UserService, private router:Router) { 

  }

  ngOnInit(){
      this.initializationSubscriber = IntervalObservable.create(1000).subscribe(n => this.startRetrieveAdminNotifications());

  }

  //Initialise un interval de récupération
  startRetrieveAdminNotifications(){
    if(this.userService.isConnected){
      switch(this.userService.userConnected.profile){
        case "admin":
          this.notificationSubscriber = IntervalObservable.create(10000).subscribe(n => this.getAdminNotifications());
          this.initializationSubscriber.unsubscribe();
          break;
        case "agent":
          this.notificationSubscriber = IntervalObservable.create(1000).subscribe(n => this.getAgentNotifications());
          this.initializationSubscriber.unsubscribe();
          break;
        case "client":
          this.notificationSubscriber = IntervalObservable.create(1000).subscribe(n => this.getClientNotifications());
          this.initializationSubscriber.unsubscribe();
           break;
      }
    }
  }

  //Redirige vers une demande
  goToDemande(type_demande,index){
    //Pouvoir envoyer "MAJ" ou "inscription"
    this.router.navigate(['/admin/request/'+this.notificationDemandeInscriptions[index].id], {fragment:type_demande});
  }

  ngOnDestroy(){
    if(this.notificationSubscriber!= null){
      //Destruction du subscriber
      this.notificationSubscriber.unsubscribe();
    }
  }

  //Récupère les notifications de l'administrateur
  getAdminNotifications(){
    this.userService.getAdminNotifications().subscribe(
      res => {
        this.notificationDemandeInscriptions = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  //Récupère les notifications d'un agent
  getAgentNotifications(){
    this.userService.getAgentNotifications().subscribe(
      res => {
        this.notificationDemandeInscriptions = res;
      },
      err => {
        console.error(err);
      }
    );
  }

  //Récupère les notifications d'un client'
  getClientNotifications(){
    this.userService.getClientNotifications().subscribe(
      res => {
        this.notificationDemandeInscriptions = res;
      },
      err => {
        console.error(err);
      }
    );
  }



  //Show/Hide notifications
  toggle(){
    this.showNotifications=!this.showNotifications;
    return this.showNotifications;
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
