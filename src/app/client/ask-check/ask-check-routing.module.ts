import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskCheckComponent } from './ask-check.component';

const routes: Routes = [
	{
		path:'',
		component: AskCheckComponent
	}	
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AskCheckRoutingModule { }
