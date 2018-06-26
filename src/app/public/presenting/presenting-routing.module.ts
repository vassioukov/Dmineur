import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentingComponent } from './presenting.component';

const routes: Routes = [
    {
        path: '',
        component: PresentingComponent
    }
];

@NgModule({
	imports:[RouterModule.forChild(routes)],
	exports:[RouterModule]
})

export class PresentingRoutingModule {}