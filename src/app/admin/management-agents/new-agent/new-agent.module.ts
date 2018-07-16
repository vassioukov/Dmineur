import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAgentRoutingModule } from './new-agent-routing.module';
import { NewAgentComponent } from './new-agent.component';

@NgModule({
  imports: [
    CommonModule,
    NewAgentRoutingModule
  ],
  declarations: [NewAgentComponent]
})
export class NewAgentModule { }
