import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentRequestRoutingModule } from './assignment-request-routing.module';
import { AssignmentRequestComponent } from './assignment-request.component';

@NgModule({
  imports: [
    CommonModule,
    AssignmentRequestRoutingModule
  ],
  declarations: [AssignmentRequestComponent]
})
export class AssignmentRequestModule { }
