import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

import { ClientComponent } from './client.component';
import { EditInfoPersoComponent } from './edit-info-perso/edit-info-perso.component';
import { CommandeChequierComponent } from './commande-chequier/commande-chequier.component';
@NgModule({
  imports: [
    LayoutModule,
    SharedModule,
    ClientRoutingModule
  ],
  declarations: [ClientComponent, EditInfoPersoComponent, CommandeChequierComponent]
})
export class ClientModule { }