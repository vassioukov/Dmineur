import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobbyRoutingModule } from './lobby-routing.module';
import { LobbyComponent } from './lobby.component';

@NgModule({
  imports: [
    CommonModule,
    LobbyRoutingModule
  ],
  declarations: [LobbyComponent]
})
export class LobbyModule { }
