import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskCheckRoutingModule } from './ask-check-routing.module';
import { AskCheckComponent } from './ask-check.component';

@NgModule({
  imports: [
    CommonModule,
    AskCheckRoutingModule
  ],
  declarations: [AskCheckComponent]
})
export class AskCheckModule { }
