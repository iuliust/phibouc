import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AccueilComponent,
  LayoutComponent,
  ShowProfileComponent,
} from './containers';

const routes: Routes = [
  { path: '', component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
