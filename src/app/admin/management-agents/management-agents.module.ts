import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementAgentsRoutingModule } from './management-agents-routing.module';
import { ManagementAgentsComponent } from './management-agents.component';

@NgModule({
  imports: [
    CommonModule,
    ManagementAgentsRoutingModule
  ],
  declarations: [ManagementAgentsComponent]
})
export class ManagementAgentsModule { }
