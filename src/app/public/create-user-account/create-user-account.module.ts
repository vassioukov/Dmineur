import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './create-user-account.routing';
import { CreateUserAccountComponent } from './create-user-account.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [CreateUserAccountComponent]
})
export class CreateUserAccountModule { }
