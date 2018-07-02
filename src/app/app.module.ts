import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID, NgModule } from '@angular/core';
import { PublicModule } from './public/public.module';
import { ClientModule } from './client/client.module';
import { AgentModule } from './agent/agent.module';
import { AdminModule } from './admin/admin.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core-module/core.module';


/*
  Needed to use the commmand "ng xi18n" to generate messages.xlf file
*/
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import localeEnExtra from '@angular/common/locales/extra/en';

registerLocaleData(localeEn, 'en-US', localeEnExtra);

/*
  End needed
*/


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PublicModule,
    ClientModule,
    AgentModule,
    AdminModule,
    PageNotFoundModule,
    AppRoutingModule,
    CoreModule.forRoot()
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr' } ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
