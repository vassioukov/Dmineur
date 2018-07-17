import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
	{
		path : 'client',
		component: ClientComponent,
        children: [
            { path: '', redirectTo: 'consult-compte', pathMatch: 'full' },
            { path: 'consult-compte', loadChildren:'./consult-compte/consult-compte.module#ConsultCompteModule'},
            { path: 'addAccount', loadChildren:'./add-compte/add-compte.module#AddCompteModule'},
                       
        ]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
