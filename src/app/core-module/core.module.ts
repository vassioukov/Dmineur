import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/userService/user.service';
import { DeviseService } from './services/deviseService/devise.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class CoreModule {
	constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
	  if (parentModule) {
	    throw new Error(
	      'CoreModule is already loaded. Import it in the AppModule only');	  	}
	}

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [
				UserService,
				DeviseService
			]
		}
	}
}