import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementClientsByAgentComponent } from './management-clients.component';

const routes: Routes = [
	{
		path: '',
		component:ManagementClientsByAgentComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementClientsByAgentRoutingModule { }
