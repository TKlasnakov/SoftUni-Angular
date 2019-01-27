import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../movies-services/movies.service";

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  private movieDetails: Object;
  private movieGenre: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) { }

  ngOnInit() {
   this.showMovieDetails();
  }

  showMovieDetails() {
    //ToDo Find a way to fix two calls to the backend;
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.movieService.getMovieById(id).subscribe(data => {
        this.movieDetails = data;
        this.showGenre(data);
      })
    })
  }

  showGenre(movieData){
    this.movieGenre = movieData.genres.map(item => item.name).join(', ');
  }
}
