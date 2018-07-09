import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementClientsByAgentRoutingModule } from './management-clients-routing.module';
import { ManagementClientsByAgentComponent } from './management-clients.component';

@NgModule({
  imports: [
    CommonModule,
    ManagementClientsByAgentRoutingModule
  ],
  declarations: [ManagementClientsByAgentComponent]
})
export class ManagementClientsByAgentModule { }
