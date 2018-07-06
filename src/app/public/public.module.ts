import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

import { PublicComponent } from './public.component';


@NgModule({
  imports: [
    LayoutModule,
    SharedModule,
    PublicRoutingModule
  ],
  exports: [
    LayoutModule,
    SharedModule
  ],
  declarations: [
  	PublicComponent
  ],
  providers: [  ]
})
export class PublicModule {
  
}