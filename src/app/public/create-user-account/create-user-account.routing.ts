import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserAccountComponent } from './create-user-account.component';

const childRoutes: Routes = [
    {
        path: '',
        component: CreateUserAccountComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);