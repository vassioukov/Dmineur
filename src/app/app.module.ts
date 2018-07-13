import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core-module/core.module';
import { HttpClientModule } from '@angular/common/http';  
//Application routing
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
/**
  Main modules
**/
import { PublicModule } from './public/public.module';
import { ClientModule } from './client/client.module';
import { AgentModule } from './agent/agent.module';
import { AdminModule } from './admin/admin.module';
/**
  Shared modules
**/
import { LayoutModule } from './shared/layout.module';
import { SharedModule } from './shared/shared.module';


/*
  Needed to use the commmand "ng xi18n" to generate messages.xlf file
*/
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeEnExtra from '@angular/common/locales/extra/en';
import { CheckValidationComponent } from './bank/check-validation/check-validation.component';

registerLocaleData(localeEn, 'en-US', localeEnExtra);


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PublicModule,
    ClientModule,
    AgentModule,
    AdminModule,
    PageNotFoundModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    LayoutModule,
    SharedModule
  ],
  exports: [
    BrowserModule,
    LayoutModule,
    SharedModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr' } ],
  declarations: [
    AppComponent,
    CheckValidationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
