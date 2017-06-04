import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  AccueilComponent,
  CandidatAgendaComponent,
  CandidatPresentationComponent,
  CandidatPublicationsComponent,
  LayoutComponent,
  PageCandidatComponent,
  ShowProfileComponent,
} from './containers';

import {
  MapComponent,
  TopNavComponent,
} from './components';

const apolloClientOptions = {};
const client: ApolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    // uri: 'https://graphql:3000/graphql',
    uri: 'graphql',
  }),
});

export function provideApolloClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    AppComponent,
    ShowProfileComponent,
    AccueilComponent,
    MapComponent,
    AccueilComponent,
    TopNavComponent,
    LayoutComponent,
    PageCandidatComponent,
    CandidatPresentationComponent,
    CandidatAgendaComponent,
    CandidatPublicationsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'candidats' }),
    ApolloModule.forRoot(provideApolloClient),
    MaterialModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
