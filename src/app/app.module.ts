import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PublicModule } from './public/public.module';
import { ClientModule } from './client/client.module';
import { AgentModule } from './agent/agent.module';
import { AdminModule } from './admin/admin.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
