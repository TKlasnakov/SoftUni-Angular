import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies-services/movies.service';

@Component({
  selector: 'movies-in-theaters',
  templateUrl: './movies-in-theaters.component.html',
  styleUrls: ['./movies-in-theaters.component.css']
})
export class MoviesInTheatersComponent implements OnInit {
  private inTheatersData;
  private inTheaters: Object;
  private moviesLength: number;
  private changeStep: number = 5;
  private currentMovieIndex: number = 5;
  private newMovieIndex: number = 0;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMoviesInTheaters()
      .subscribe(data => {
        this.inTheatersData = data;
        this.moviesLength = data.results.length;
        this.inTheaters = this.moviesService.showMovies(this.inTheatersData.results, this.newMovieIndex, this.currentMovieIndex);
      });
  }

  showNextMovies() {
    if(this.currentMovieIndex < this.moviesLength) {
      this.newMovieIndex += this.changeStep;
      this.currentMovieIndex += this.changeStep;
      this.inTheaters = this.moviesService.showMovies(this.inTheatersData.results, this.newMovieIndex, this.currentMovieIndex);
    }
  }

  showPreviousMovies() {
    if(this.currentMovieIndex > 5) {
      this.newMovieIndex -= this.changeStep;
      this.currentMovieIndex -= this.changeStep;
      this.inTheaters = this.moviesService.showMovies(this.inTheatersData.results, this.newMovieIndex, this.currentMovieIndex);
    }
  }
}
