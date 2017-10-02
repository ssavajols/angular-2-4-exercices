import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesService } from './services/movies.service';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdButtonModule, MdToolbarModule, MdLineModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MdButtonModule,
    MdLineModule,
    MdToolbarModule
  ],
  declarations: [
    MoviesListComponent,
    MovieComponent
  ],
  providers: [
    MoviesService
  ]
})
export class MoviesModule { }
