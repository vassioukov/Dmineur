import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
	{
		path : 'client',
		component: ClientComponent,
        children: [
            { path: '', redirectTo: 'viewBankAccounts', pathMatch: 'full' },
            { path: 'editAccount', loadChildren:'./edit-account/edit-account.module#EditAccountModule'},
            { path: 'viewBankAccounts', loadChildren:'./consult-compte/consult-compte.module#ConsultCompteModule'},
            { path: 'addAccount', loadChildren:'./add-compte/add-compte.module#AddCompteModule'},
            { path: 'askCheck', loadChildren:'./commande-chequier/commande-chequier.module#CommandeChequierModule'},
            { path: 'editAccount', loadChildren:'./edit-account/edit-account.module#EditAccountModule'},
            { path: 'request/:id', loadChildren:'./request-by-client/request-by-client.module#RequestByClientModule'},
        ]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
