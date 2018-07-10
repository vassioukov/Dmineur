import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementClientsByAdminComponent } from './management-clients.component';

const routes: Routes = [
	{
		path: '',
		component:ManagementClientsByAdminComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementClientsByAdminRoutingModule { }
