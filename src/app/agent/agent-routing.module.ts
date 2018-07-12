import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentComponent } from './agent.component';

const routes: Routes = [
	{
		path:'agent',
		component: AgentComponent,
        children: [
            { path: '', redirectTo: 'agent', pathMatch: 'full' },
            { path: 'managementClients', loadChildren:'./management-clients/management-clients.module#ManagementClientsByAgentModule'},
        ]
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
