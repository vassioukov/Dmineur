import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementAgentsComponent } from './management-agents.component';

const routes: Routes = [
	{
		path:'',
		component: ManagementAgentsComponent,
		
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementAgentsRoutingModule { }
