import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementAgentsRoutingModule } from './management-agents-routing.module';
import { ManagementAgentsComponent } from './management-agents.component';
import {UserService} from '../../core-module/services/userService/user.service';
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
  ],
  providers:[UserService]
})
export class ManagementAgentsModule { }
