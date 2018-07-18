import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditAccountComponent } from './edit-account.component';
import { EditAccountRoutingModule } from './edit-account-routing.module';

import { LayoutModule } from '../../shared/layout.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EditAccountRoutingModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [EditAccountComponent]
})
export class EditAccountModule { }
