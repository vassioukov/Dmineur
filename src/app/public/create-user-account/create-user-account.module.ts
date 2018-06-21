import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUserAccountRouting } from './create-user-account-routing.module';
import { CreateUserAccountComponent } from './create-user-account.component';

@NgModule({
  imports: [
    CommonModule,
    CreateUserAccountRouting
  ],
  declarations: [CreateUserAccountComponent]
})

export class CreateUserAccountModule { }
