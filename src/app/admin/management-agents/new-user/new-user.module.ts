import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewUserRoutingModule } from './new-user-routing.module';
import { LayoutModule } from '../../../shared/layout.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NewUserRoutingModule,
    LayoutModule,
    SharedModule
  ],
  declarations: []
})
export class NewUserModule { }
