import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
	{
		path : 'client',
		component: ClientComponent,
        children: [
            { path: '', redirectTo: 'viewAccount', pathMatch: 'full' },
            { path: 'viewAccount', loadChildren:'./consult-compte/consult-compte.module#ConsultCompteModule'},
            { path: 'addAccount', loadChildren:'./add-compte/add-compte.module#AddCompteModule'},
            { path: 'askCheck', loadChildren:'./commande-chequier/commande-chequier.module#CommandeChequierModule'}          
        ]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
