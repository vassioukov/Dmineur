import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementsClientsRoutingModule } from './managements-clients-routing.module';
import { ManagementsClientsComponent } from './managements-clients.component';

@NgModule({
  imports: [
    CommonModule,
    ManagementsClientsRoutingModule
  ],
  declarations: [ManagementsClientsComponent]
})
export class ManagementsClientsModule { }
