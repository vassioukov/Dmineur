import { Component, OnInit } from '@angular/core';
import {fakeAgent} from  '../../shared/models/fake-session/fakeAgent';
import {FAKEAGENTITEMS} from  '../../shared/models/fake-session/fakeAgents';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	agentName: fakeAgent;
	agents = FAKEAGENTITEMS;
  constructor() { }

  ngOnInit() {
  }

}
