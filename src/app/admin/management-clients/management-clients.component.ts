import { Component, OnInit } from '@angular/core';
import { UserService } from "../../core-module/services/userService/user.service";
import {Client} from '../../shared/models/utilisateur/client';

@Component({
  selector: 'app-management-clients',
  templateUrl: './management-clients.component.html',
  styleUrls: ['./management-clients.component.css']
})

export class ManagementClientsByAdminComponent implements OnInit {
	 clients: Client[];

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getAllClients().subscribe(
      res => {
        this.clients= res;
      }, err => {
        console.error(err);
      }
      );
  }

}
