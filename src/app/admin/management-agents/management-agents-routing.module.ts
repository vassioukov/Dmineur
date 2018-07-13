import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementAgentsComponent } from './management-agents.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [

    {
        path:'',  component: ManagementAgentsComponent,
        children: [
<<<<<<< HEAD
            { path: 'new-user', loadChildren:'./management-clients/new-user/new-user.module#NewUserModule'},
=======
            { path: 'new-user', component: NewUserComponent },
            { path: 'new-user/:id', component: NewUserComponent},
>>>>>>> 046f75128047d7d07efa5462a07b9ebfd0722557
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementAgentsRoutingModule { }