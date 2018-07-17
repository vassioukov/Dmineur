import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementAgentsComponent } from './management-agents.component';

const routes: Routes = [

    {
        path:'',  component: ManagementAgentsComponent,
        children: [

            { path: 'new-agent', loadChildren:'./new-agent/new-agent.module#NewAgentModule'},
            { path: 'new-agent/:id', loadChildren:'./new-agent/new-agent.module#NewAgentModule'},


        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementAgentsRoutingModule { }