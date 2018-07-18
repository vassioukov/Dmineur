import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementAgentsRoutingModule } from './management-agents-routing.module';
import { ManagementAgentsComponent, DialogOverviewExampleDialog } from './management-agents.component';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../../shared/layout.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ManagementAgentsRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    LayoutModule,
    SharedModule
  ],
  exports:[
  	FormsModule, 
  	ReactiveFormsModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [
  	ManagementAgentsComponent,
  	NewUserComponent,
    DialogOverviewExampleDialog,
  ],
  providers:[],
  entryComponents:[DialogOverviewExampleDialog]
})
export class ManagementAgentsModule { }
