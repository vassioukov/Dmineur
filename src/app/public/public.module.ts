import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

import { PublicComponent } from './public.component';
import { BrowserModule } from '@angular/platform-browser';
import { LobbyModule } from './lobby/lobby.module';
import { LoginModule } from './login/login.module';
import { ThriftModule } from './thrift/thrift.module';
import { PresentingModule } from './presenting/presenting.module';
import { CreateUserAccountModule } from './create-user-account/create-user-account.module';


@NgModule({
  imports: [
    BrowserModule,
    LayoutModule,
    SharedModule,
    PublicRoutingModule,
    LobbyModule,
    ThriftModule,
    PresentingModule,
    CreateUserAccountModule
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