import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementAgentsRoutingModule } from './management-agents-routing.module';
import { ManagementAgentsComponent } from './management-agents.component';
import { UserService } from './services/user.service';
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
  	NewUserComponent
  ],
  providers:[UserService]
})
export class ManagementAgentsModule { }
