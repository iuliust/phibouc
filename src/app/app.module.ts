import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import { ApolloModule } from 'apollo-angular';
import { AppShellModule } from '@angular/app-shell';

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
const websocketClient = new SubscriptionClient('ws://localhost:5000', {
  reconnect: true,
});
const networkInterface = createNetworkInterface({
  // uri: 'https://graphql:3000/graphql',
  uri: 'graphql',
});
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(networkInterface, websocketClient);

const client: ApolloClient = new ApolloClient({
  dataIdFromObject: (o: any) => o.id,
  networkInterface: networkInterfaceWithSubscriptions,
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
    AppShellModule.runtime(),
    MaterialModule,
    FormsModule,
    HttpModule,
    ServiceWorkerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
