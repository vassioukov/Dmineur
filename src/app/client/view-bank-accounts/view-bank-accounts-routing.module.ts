import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBankAccountsComponent } from './view-bank-accounts.component';

const routes: Routes = [
	{
		path:'',
		component: ViewBankAccountsComponent
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewBankAccountsRoutingModule { }
