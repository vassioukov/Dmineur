import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule'},
            { path: 'assignmentRequest', loadChildren:'./assignment-request/assignment-request.module#AssignmentRequestModule'},
            { path: 'managementAgents', loadChildren:'./management-agents/management-agents.module#ManagementAgentsModule'},
            { path: 'managementClients', loadChildren:'./management-clients/management-clients.module#ManagementClientsByAdminModule'},
           
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
