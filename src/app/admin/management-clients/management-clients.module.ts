import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementClientsByAdminRoutingModule } from './management-clients-routing.module';
import { ManagementClientsByAdminComponent } from './management-clients.component';

@NgModule({
  imports: [
    CommonModule,
    ManagementClientsByAdminRoutingModule
  ],
  declarations: [ManagementClientsByAdminComponent]
})
export class ManagementClientsByAdminModule { }
