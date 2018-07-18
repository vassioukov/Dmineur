import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultCompteRoutingModule } from './consult-compte-routing.module';
import { ConsultCompteComponent } from './consult-compte.component';
import { LayoutModule } from '../../shared/layout.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ConsultCompteRoutingModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [ConsultCompteComponent]
})
export class ConsultCompteModule { }
