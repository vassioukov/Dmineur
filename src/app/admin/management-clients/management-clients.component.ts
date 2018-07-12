import { Component, OnInit } from '@angular/core';
import {fakeClient} from  '../../shared/models/fake-session/fakeClient';
import {FAKECLIENTITEMS} from  '../../shared/models/fake-session/fakeClients';

@Component({
  selector: 'app-management-clients',
  templateUrl: './management-clients.component.html',
  styleUrls: ['./management-clients.component.css']
})
export class ManagementClientsComponent implements OnInit {
	clientName: fakeClient;
	clients = FAKECLIENTITEMS;

  constructor() { }

  ngOnInit() {
  }

}
