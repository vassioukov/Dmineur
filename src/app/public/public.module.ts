import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './public.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    SharedModule,
    routing
  ],
  declarations: [
  	PublicComponent,
    LoginComponent
  ],
  providers: [
  ]
})
export class PublicModule { }
