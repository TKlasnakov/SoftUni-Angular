import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../movies-services/movies.service";

@Component({
  selector: 'popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  private popularMoviesData;
  private popular: Object;
  private moviesLength: number;
  private changeStep: number = 5;
  private currentMovieIndex: number = 5;
  private newMovieIndex: number = 0;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getPopular()
      .subscribe(data => {
        this.popularMoviesData = data;
        this.moviesLength = data.results.length;
        this.popular = this.moviesService.showMovies(this.popularMoviesData.results, this.newMovieIndex, this.currentMovieIndex);
      })
  }

  showNextMovies() {
    if(this.currentMovieIndex < this.moviesLength) {
      this.newMovieIndex += this.changeStep;
      this.currentMovieIndex += this.changeStep;
      this.popular = this.moviesService.showMovies(this.popularMoviesData.results, this.newMovieIndex, this.currentMovieIndex);
    }
  }

  showPreviousMovies() {
    if(this.currentMovieIndex > 5) {
      this.newMovieIndex -= this.changeStep;
      this.currentMovieIndex -= this.changeStep;
      this.popular = this.moviesService.showMovies(this.popularMoviesData.results, this.newMovieIndex, this.currentMovieIndex);
    }
  }
}
