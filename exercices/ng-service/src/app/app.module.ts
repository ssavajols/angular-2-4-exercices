import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { MoviesModule } from './modules/movies/movies.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdToolbarModule, MdLineModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterComponent,
    PageNotFoundComponent
  ],
  imports: [
    MdLineModule,
    MdButtonModule,
    MdToolbarModule,
    BrowserAnimationsModule,
    BrowserModule,
    MoviesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
