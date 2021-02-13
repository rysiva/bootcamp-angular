import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeoplesComponent } from './peoples/peoples.component';

const routes: Routes = [
  { path: 'peoples', component: PeoplesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
