import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyAgentComponent } from './lobby.component';

const routes: Routes = [
	{
		path:'',
		component: LobbyAgentComponent
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LobbyAgentRoutingModule { }