import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../../core-module/services/userService/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-material-modal',
  templateUrl: './material-modal.component.html',
  styleUrls: ['./material-modal.component.css']
})
export class MaterialModalComponent implements OnInit {

	animal: string;
	name: string;
	subscriber: Subscription;

  	constructor(public dialog: MatDialog, private userService:UserService) {}

  	ngOnInit(){
      console.log("in here");
		this.subscriber = this.userService.hasTriedToDeleteSubject.subscribe(
		  (res: String) => {
		  	console.log("in material modal");
	  		this.openDialog(res);
		  }
		);
  	}

	openDialog(data): void {
		const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
			width: '400px',
			data: data
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			this.animal = result;
		});
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
  selector: 'dialog-overview/dialog-overview',
  templateUrl: 'dialog-overview/dialog-overview.html',
  styleUrls: ['dialog-overview/dialog-overview.css'],
})
export class DialogOverviewExample {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
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
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}