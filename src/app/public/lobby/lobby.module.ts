import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './lobby.routing';
import { LobbyComponent } from './lobby.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LobbyComponent]
})
export class LobbyModule { }
