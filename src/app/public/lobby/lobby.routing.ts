import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './lobby.component';

const childRoutes: Routes = [
    {
        path: '',
        component: LobbyComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);