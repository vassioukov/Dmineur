import { Component, OnInit } from '@angular/core';
import { fakeAgent } from '../../shared/models/fake-session/fakeAgent';
import { FAKEAGENTITEMS } from '../../shared/models/fake-session/fakeAgents';

@Component({
  selector: 'app-management-agents',
  templateUrl: './management-agents.component.html',
  styleUrls: ['./management-agents.component.css']
})
export class ManagementAgentsComponent implements OnInit {

	//agentList:fakeAgent[] = FAKEAGENTITEMS;
	agentName: fakeAgent;
	agents = FAKEAGENTITEMS;


  constructor() { }

  ngOnInit() {

  	//console.log(this.agentList);
  }

}
