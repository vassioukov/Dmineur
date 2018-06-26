import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentingRoutingModule } from './presenting-routing.module';
import { PresentingComponent } from './presenting.component';

@NgModule({
  imports: [
    CommonModule,
    PresentingRoutingModule
  ],
  declarations: [PresentingComponent]
})
export class PresentingModule { }
