import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeChequierRoutingModule } from './commande-chequier-routing.module';
import { CommandeChequierComponent } from './commande-chequier.component';
import { LayoutModule } from '../../shared/layout.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CommandeChequierRoutingModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [CommandeChequierComponent]
})
export class CommandeChequierModule { }
