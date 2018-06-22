import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

import { ClientComponent } from './client.component';

@NgModule({
  imports: [
    LayoutModule,
    SharedModule,
    ClientRoutingModule
  ],
  declarations: [ClientComponent]
})
export class ClientModule { }