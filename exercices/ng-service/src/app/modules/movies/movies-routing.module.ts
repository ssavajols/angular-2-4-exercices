import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const moviesRoutes: Routes = [
  { path: 'movies', component: MoviesListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }
