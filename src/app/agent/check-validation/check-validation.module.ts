import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckValidationRoutingModule } from './check-validation-routing.module';
import { CheckValidationComponent } from './check-validation.component';
import { LayoutModule } from '../../shared/layout.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CheckValidationRoutingModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [CheckValidationComponent]
})
export class CheckValidationModule { }
