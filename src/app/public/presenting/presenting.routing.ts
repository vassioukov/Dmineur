import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentingComponent } from './presenting.component';

const childRoutes: Routes = [
    {
        path: '',
        component: PresentingComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);