import { NgModule} from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { MoviesComponent} from "./movies-module/movies-components/movies.component";
import { MovieDetailsComponent } from "./movies-module/movie-details/movie-details.component";

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailsComponent }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting {}

