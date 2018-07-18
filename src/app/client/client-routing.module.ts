import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
	{
		path : 'client',
		component: ClientComponent,
        children: [
            { path: '', redirectTo: 'viewBankAccounts', pathMatch: 'full' },
            { path: 'viewBankAccounts', loadChildren:'./view-bank-accounts/view-bank-accounts.module#ViewBankAccountsModule'},
            { path: 'editAccount', loadChildren:'./edit-account/edit-account.module#EditAccountModule'},
            { path: 'askCheck', loadChildren:'./ask-check/ask-check.module#AskCheckModule'},
        ]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
