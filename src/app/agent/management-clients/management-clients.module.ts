import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementClientsByAgentsRoutingModule } from './management-clients-routing.module';
import { ManagementClientsByAgentsComponent } from './management-clients.component';

@NgModule({
  imports: [
    CommonModule,
    ManagementClientsByAgentsRoutingModule
  ],
  declarations: [ManagementClientsByAgentsComponent]
})
export class ManagementClientsByAgentModule { }
