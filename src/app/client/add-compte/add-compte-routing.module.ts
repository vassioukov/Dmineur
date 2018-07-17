import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompteComponent } from './add-compte.component';


const routes: Routes = [
	{
		path:'',
		component: AddCompteComponent
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCompteRoutingModule { }
