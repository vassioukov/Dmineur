import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentRequestComponent } from './assignment-request.component';

const routes: Routes = [
	{
		path:'',
		component: AssignmentRequestComponent
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRequestRoutingModule { }
