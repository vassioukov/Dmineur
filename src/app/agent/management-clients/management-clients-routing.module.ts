import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementClientsByAgentsComponent } from './management-clients.component';

const routes: Routes = [
	{
		path:'managementClients',
		component: ManagementClientsByAgentsComponent
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementClientsByAgentsRoutingModule { }
