import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';

export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
	{
        path: 'public',
        component: PublicComponent,
        children: [
            { path: '', redirectTo: 'lobby', pathMatch: 'full' },
            { path: 'lobby', loadChildren:'./lobby/lobby.module#LobbyModule'},
            { path: 'presenting', loadChildren:'./presenting/presenting.module#PresentingModule'},
            { path: 'createUserAccount', loadChildren:'./create-user-account/create-user-account.module#CreateUserAccountModule'},
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);