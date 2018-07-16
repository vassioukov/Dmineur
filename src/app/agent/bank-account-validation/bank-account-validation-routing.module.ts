import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankAccountValidationComponent } from './bank-account-validation.component';

const routes: Routes = [
	{
		path:'',
		component: BankAccountValidationComponent
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAccountValidationRoutingModule { }
