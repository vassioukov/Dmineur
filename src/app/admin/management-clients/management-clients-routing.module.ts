import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementClientsComponent } from './management-clients.component';

const routes: Routes = [
	{
		path: '',
		component:ManagementClientsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementClientsRoutingModule { }
