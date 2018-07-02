import { NgModule } from '@angular/core';

import { LobbyRoutingModule } from './lobby-routing.module';
import { LobbyComponent } from './lobby.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    LobbyRoutingModule
  ],
  declarations: [LobbyComponent]
})
export class LobbyModule { }
