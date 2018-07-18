import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Agent } from '../../shared/models/utilisateur/agent';
import { UserService } from '../../core-module/services/userService/user.service';

@Component({
  selector: 'app-management-agents',
  templateUrl: './management-agents.component.html',
  styleUrls: ['./management-agents.component.css']
})

export class ManagementAgentsComponent implements OnInit {
  agents:Agent[];
  print=false;
  agentsSubscription: Subscription;
  hasTriedToDeleteSubject: Subscription;

  constructor(private userService: UserService,private router: Router,public dialog: MatDialog) { }

  ngOnInit() {
    console.log("here");
    this.userService.getAllAgents().subscribe(
      res => {
        this.agents = res;
      }, err => {
        console.error(err);
      }
    )

    this.agentsSubscription = this.userService.agentsSubject.subscribe(
      (agents: Agent[]) => {
        this.agents = agents;
      }
    );

    this.hasTriedToDeleteSubject = this.userService.hasTriedToDeleteSubject.subscribe(
      (data:String) => {
        this.openDialog(data);
      }
    )

   // this.userService.emitUsers();
  }


  openDialog(data): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }






  ngOnDestroy() {
    this.agentsSubscription.unsubscribe();
  }

  onDeleteConfirm(agent) {
      if(confirm('Etes-vous sûr de vouloir supprimer ce conseiller ?')) {
        this.onDeleteUser(agent);
      } else {
        return null;
      }
  }

  onDeleteUser(agent) {
    this.userService.deleteAgent(agent).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error(err);
      }
    )
  }

  onEditUser(i: number) {
    if(!this.print){
      this.toggle();
    }
    //this.userService.changeUser(i);
    this.router.navigate(["./admin/managementAgents/new-user/"+i]);
  }

  toggle(){
    this.print=!this.print;
  }
}


export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog/dialog-overview-example.html',
  styleUrls: ['dialog/dialog-overview-example.css'],
})
export class DialogOverviewExample implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit(){
    this.openDialog('');
  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog/dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}