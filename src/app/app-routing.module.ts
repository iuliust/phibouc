import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AccueilComponent,
  CandidatAgendaComponent,
  CandidatPresentationComponent,
  CandidatPublicationsComponent,
  LayoutComponent,
  PageCandidatComponent,
  ShowProfileComponent,
} from './containers';

const routes: Routes = [
  { path: '', component: PageCandidatComponent, children: [
    { path: 'presentation', component: CandidatPresentationComponent },
    { path: 'publications', component: CandidatPublicationsComponent },
    { path: 'agenda', component: CandidatAgendaComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
