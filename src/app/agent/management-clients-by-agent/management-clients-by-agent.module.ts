import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementClientsByAgentRoutingModule } from './management-clients-by-agent-routing.module';
import { ManagementClientsByAgentComponent } from './management-clients-by-agent.component';

import { LayoutModule } from '../../shared/layout.module';
import { SharedModule } from '../../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    LayoutModule,
    SharedModule,
    CommonModule,
    ManagementClientsByAgentRoutingModule
  ],
  declarations: [ManagementClientsByAgentComponent]
})
export class ManagementClientsByAgentModule { }
