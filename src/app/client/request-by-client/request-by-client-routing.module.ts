import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestByClientComponent } from './request-by-client.component';

const routes: Routes = [
	{
		path:'',
		component: RequestByClientComponent
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestByClientRoutingModule { }
