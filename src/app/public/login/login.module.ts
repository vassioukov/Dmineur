import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LayoutModule } from '../../shared/layout.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		LoginRoutingModule,
		LayoutModule,
		SharedModule
	],
	declarations: [LoginComponent],
})
export class LoginModule { }
