import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementAgentsComponent } from './management-agents.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [

    {
        path:'',  component: ManagementAgentsComponent,
        children: [
            { path: 'new-user', loadChildren:'./management-clients/new-user/new-user.module#NewUserModule'},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementAgentsRoutingModule { }