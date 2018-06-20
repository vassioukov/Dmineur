import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'public/lobby',
    pathMatch: 'full'
  },
  {
    path: '**',
    //component: PageNotFoundComponent
    redirectTo: 'public/lobby'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
