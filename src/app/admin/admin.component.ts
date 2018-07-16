import { Component, OnInit } from '@angular/core';
import { UserService } from "../core-module/services/userService/user.service";

declare let EventSource:any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

}
