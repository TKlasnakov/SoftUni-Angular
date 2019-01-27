import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRouting } from "../app.routing";

/*Components*/
import { MoviesComponent } from './movies-components/movies.component';
import { PopularMoviesComponent } from './movies-components/popular-movies/popular-movies.component';
import { MoviesInTheatersComponent } from './movies-components/movies-in-theaters/movies-in-theaters.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { JumbotronComponent } from "./movies-components/jumbotron/jumbotron.component";

/*Services*/
import { MoviesService } from './movies-services/movies.service';

@NgModule({
  imports: [
    CommonModule,
    AppRouting
  ],
  declarations: [
    MoviesComponent,
    PopularMoviesComponent,
    MoviesInTheatersComponent,
    MovieDetailsComponent,
    JumbotronComponent
  ],
  exports: [ MoviesComponent ],
  providers: [ MoviesService ]
})
export class MoviesModule { }
