import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewUserRoutingModule } from './new-user-routing.module';
<<<<<<< HEAD
import { LayoutModule } from '../../../shared/layout.module';
import { SharedModule } from '../../../shared/shared.module';
=======
>>>>>>> 046f75128047d7d07efa5462a07b9ebfd0722557

@NgModule({
  imports: [
    CommonModule,
<<<<<<< HEAD
    NewUserRoutingModule,
    LayoutModule,
    SharedModule
=======
    NewUserRoutingModule
>>>>>>> 046f75128047d7d07efa5462a07b9ebfd0722557
  ],
  declarations: []
})
export class NewUserModule { }
