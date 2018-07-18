import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandeChequierComponent} from './commande-chequier.component';


const routes: Routes = [
	{
		path:'',
		component: CommandeChequierComponent
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeChequierRoutingModule { }
