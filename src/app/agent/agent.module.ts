import { NgModule } from '@angular/core';

import { AgentRoutingModule } from './agent-routing.module';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

import { AgentComponent } from './agent.component';

@NgModule({
  imports: [
    LayoutModule,
    SharedModule,
    AgentRoutingModule
  ],
  exports : [
    LayoutModule,
    SharedModule,
  ],
  declarations: [AgentComponent]
})
export class AgentModule { }
