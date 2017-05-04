import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  ShowProfileComponent,
  AccueilComponent
} from './containers';

import {
  MapComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    ShowProfileComponent,
    AccueilComponent,
    MapComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'candidats' }),
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
