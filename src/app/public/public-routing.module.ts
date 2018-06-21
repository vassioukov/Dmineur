import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';

export const routes: Routes = [
	{
        path: 'public',
        component: PublicComponent,
        children: [
            { path: '', redirectTo: 'lobby', pathMatch: 'full' },
            { path: 'lobby', loadChildren:'./lobby/lobby.module#LobbyModule'},
            { path: 'thrift', loadChildren:'./thrift/thrift.module#ThriftModule'},
            { path: 'login', loadChildren:'./login/login.module#LoginModule'},
            { path: 'presenting', loadChildren:'./presenting/presenting.module#PresentingModule'},
            { path: 'createUserAccount', loadChildren:'./create-user-account/create-user-account.module#CreateUserAccountModule'},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }