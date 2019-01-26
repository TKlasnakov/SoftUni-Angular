import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*Components*/
import { MoviesComponent } from './movies.component';
import { PopularMoviesComponent } from './movies-components/popular-movies/popular-movies.component';
import { MoviesInTheatersComponent } from './movies-components/movies-in-theaters/movies-in-theaters.component';

/*Services*/
import { MoviesService } from './movies-services/movies.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MoviesComponent,
    PopularMoviesComponent,
    MoviesInTheatersComponent
  ],
  exports: [MoviesComponent],
  providers: [MoviesService]
})
export class MoviesModule { }
