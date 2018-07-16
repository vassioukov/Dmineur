import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobbyAgentRoutingModule } from './lobby-routing.module';
import { LobbyAgentComponent } from './lobby.component';

@NgModule({
  imports: [
    CommonModule,
    LobbyAgentRoutingModule
  ],
  declarations: [LobbyAgentComponent]
})
export class LobbyAgentModule { }
