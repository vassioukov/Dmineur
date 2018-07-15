import { Component, OnInit } from '@angular/core';
import { UserService } from "../core-module/services/userService/user.service";
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

declare let EventSource:any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  	IntervalObservable.create(1000).subscribe(n => this.getAllAgents());
  }

  getAllAgents(){
  	this.userService.getAllAgents().subscribe(
  		res => {
  			console.log(res);
  		},
  		err => {
  			console.error(err);
  		}
  	);
  }

}
