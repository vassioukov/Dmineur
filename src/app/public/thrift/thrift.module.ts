import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThriftRoutingModule } from './thrift-routing.module';
import { ThriftComponent } from './thrift.component';

@NgModule({
  imports: [
    CommonModule,
    ThriftRoutingModule
  ],
  declarations: [ThriftComponent]
})
export class ThriftModule { }
