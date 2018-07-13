import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentComponent } from './agent.component';

const routes: Routes = [
	{
		path:'agent',
		component: AgentComponent,
        children: [
            { path: '', redirectTo: 'lobby-agent', pathMatch: 'full' },
            { path: 'lobby-agent', loadChildren:'./lobby-agent/lobby.module#LobbyAgentModule'},
            { path: 'managementClientsByAgent', loadChildren:'./management-clients-by-agent/management-clients-by-agent.module#ManagementClientsByAgentModule'},
            { path: 'request/:id', loadChildren:'./request-by-agent/request-by-agent.module#RequestByAgentModule'},
        ]
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
