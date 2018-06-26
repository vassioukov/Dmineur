import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementClientsRoutingModule } from './management-clients-routing.module';
import { ManagementClientsComponent } from './management-clients.component';

@NgModule({
  imports: [
    CommonModule,
    ManagementClientsRoutingModule
  ],
  declarations: [ManagementClientsComponent]
})
export class ManagementClientsModule { }
