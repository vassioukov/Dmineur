import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserAccountComponent } from './create-user-account.component';

const routes: Routes = [
    {
        path: '',
        component: CreateUserAccountComponent
    }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CreateUserAccountRouting {}