import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewBankAccountsRoutingModule } from './view-bank-accounts-routing.module';
import { ViewBankAccountsComponent } from './view-bank-accounts.component';

@NgModule({
  imports: [
    CommonModule,
    ViewBankAccountsRoutingModule
  ],
  declarations: [ViewBankAccountsComponent]
})
export class ViewBankAccountsModule { }
