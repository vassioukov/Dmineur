import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentRequestRoutingModule } from './assignment-request-routing.module';
import { AssignmentRequestComponent } from './assignment-request.component';
import { LayoutModule } from '../../shared/layout.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AssignmentRequestRoutingModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [AssignmentRequestComponent]
})
export class AssignmentRequestModule { }
