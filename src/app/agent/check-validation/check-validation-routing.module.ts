import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckValidationComponent } from './check-validation.component';

const routes: Routes = [
	{
		path:'',
		component: CheckValidationComponent
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckValidationRoutingModule { }
