import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestByAgentRoutingModule } from './request-by-agent-routing.module';
import { RequestByAgentComponent } from './request-by-agent.component';

import { LayoutModule } from '../../shared/layout.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RequestByAgentRoutingModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [RequestByAgentComponent]
})
export class RequestByAgentModule { }
