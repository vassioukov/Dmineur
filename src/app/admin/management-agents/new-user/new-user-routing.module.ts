import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [];
=======
import { NewUserComponent } from './new-user.component';

const routes: Routes = [{
path:'',  component: NewUserComponent,
}];
>>>>>>> 046f75128047d7d07efa5462a07b9ebfd0722557

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewUserRoutingModule { }
