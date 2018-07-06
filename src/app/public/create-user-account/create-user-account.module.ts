import { NgModule } from '@angular/core';
import { CreateUserAccountRouting } from './create-user-account-routing.module';
import { CreateUserAccountComponent } from './create-user-account.component';
import { LayoutModule } from '../../shared/layout.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    LayoutModule,
    SharedModule,
    CreateUserAccountRouting
  ],
  declarations: [CreateUserAccountComponent]
})

export class CreateUserAccountModule { }
