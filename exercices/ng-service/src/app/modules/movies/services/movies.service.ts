import { MOVIES } from './../classes/data-movies';
import { Injectable } from '@angular/core';
import { Movie } from '../classes/movie';


@Injectable()
export class MoviesService {

  constructor() { }

  getMovies(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }

}
