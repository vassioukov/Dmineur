import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestByAgentComponent } from './request-by-agent.component';

const routes: Routes = [
	{
		path:'',
		component: RequestByAgentComponent
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestByAgentRoutingModule { }
