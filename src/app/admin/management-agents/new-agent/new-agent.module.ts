import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule}  from '@angular/forms';
import { NewAgentRoutingModule } from './new-agent-routing.module';
import { NewAgentComponent } from './new-agent.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NewAgentRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewAgentComponent],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewAgentModule { }
