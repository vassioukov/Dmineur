import { NgModule } from '@angular/core';
import { LobbyRoutingModule } from './lobby-routing.module';
import { LobbyComponent } from './lobby.component';
import { LayoutModule } from '../../shared/layout.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    LayoutModule,
    SharedModule,
    LobbyRoutingModule
  ],
  declarations: [LobbyComponent]
})
export class LobbyModule { }
