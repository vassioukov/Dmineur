import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { CreateUserAccountRouting } from './create-user-account-routing.module';
import { CreateUserAccountComponent } from './create-user-account.component';

@NgModule({
  imports: [
    CommonModule,
    CreateUserAccountRouting,
    FormsModule
  ],
  declarations: [CreateUserAccountComponent]
})

export class CreateUserAccountModule { }
