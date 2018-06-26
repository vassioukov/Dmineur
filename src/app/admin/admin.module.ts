import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    LayoutModule,
    SharedModule,
    AdminRoutingModule,
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
