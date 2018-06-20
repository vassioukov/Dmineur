import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './presenting.routing';
import { PresentingComponent } from './presenting.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [PresentingComponent]
})
export class PresentingModule { }
