import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestByClientRoutingModule } from './request-by-client-routing.module';
import { RequestByClientComponent } from './request-by-client.component';

@NgModule({
  imports: [
    CommonModule,
    RequestByClientRoutingModule
  ],
  declarations: [RequestByClientComponent]
})
export class RequestByClientModule { }
