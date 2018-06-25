import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementsClientsComponent } from './managements-clients.component';

const routes: Routes = [
	{
		path: '',
		component:ManagementsClientsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementsClientsRoutingModule { }
