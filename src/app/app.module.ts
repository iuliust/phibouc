import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  AccueilComponent,
  LayoutComponent,
  PageCandidatComponent,
  ShowProfileComponent,
} from './containers';

import {
  MapComponent,
  TopNavComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    ShowProfileComponent,
    AccueilComponent,
    MapComponent,
    AccueilComponent,
    TopNavComponent,
    LayoutComponent,
    PageCandidatComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'candidats' }),
    MaterialModule.forRoot(),
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
