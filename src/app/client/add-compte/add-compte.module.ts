import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCompteRoutingModule } from './add-compte-routing.module';
import { AddCompteComponent } from './add-compte.component';
import { LayoutModule } from '../../shared/layout.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AddCompteRoutingModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [AddCompteComponent]
})
export class AddCompteModule { }
