import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountValidationRoutingModule } from './bank-account-validation-routing.module';
import { BankAccountValidationComponent } from './bank-account-validation.component';
import { LayoutModule } from '../../shared/layout.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BankAccountValidationRoutingModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [BankAccountValidationComponent]
})
export class BankAccountValidationModule { }
