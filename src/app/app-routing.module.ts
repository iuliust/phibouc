import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AccueilComponent,
  LayoutComponent,
  PageCandidatComponent,
  ShowProfileComponent,
} from './containers';

const routes: Routes = [
  { path: '', component: PageCandidatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
