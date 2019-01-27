import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private path: string = 'https://api.themoviedb.org/3/discover/movie?';
  private popular: string = 'sort_by=popularity.desc';
  private authentication: string = '&api_key=9741af0db0daa2cc2e6d764b5bf23dde';
  private pathMovieById: string = 'https://api.themoviedb.org/3/movie/';
  private movieByIdAuth: string = '?api_key=9741af0db0daa2cc2e6d764b5bf23dde';

  constructor(private http: HttpClient) {}

  getPopular(): Observable<GetPopular> {
    return this.http.get<GetPopular>(`${this.path}${this.popular}${this.authentication}`);
  }

  getMoviesInTheaters(): Observable<InTheaters> {
    let releaseDateFromYear = new Date().getFullYear();
    let releaseDateFromMonth = new Date().getMonth() + 1;
    let releaseDateFromDay = new Date().getDate();
    let releaseDateToDay = new Date().getFullYear();
    let releaseDateToMonth = new Date().getMonth() + 1;
    let releaseDateToYear = new Date().getDate();

    if(releaseDateFromMonth === 1) {
      releaseDateFromYear --;
      releaseDateFromMonth = 12;
      releaseDateFromDay = 31;
    }

    const releaseDateFrom = `primary_release_date.gte=${releaseDateFromYear}-${releaseDateFromMonth}-${releaseDateFromDay}`;
    const releaseDateTo = `&primary_release_date.lte=${releaseDateToDay}-${releaseDateToMonth}-${releaseDateToYear}`;

    return this.http.get<InTheaters>(`${this.path}${releaseDateFrom}${releaseDateTo}${this.authentication}`)
  }

  getMovieById(id): Observable<Object> {
    console.log(id);
    return this.http.get<Object>(`${this.pathMovieById}${id}${this.movieByIdAuth}`);
  }

  showMovies(movieList, indexFrom, indexToShow): number {
    return movieList.filter((elem, index) => index >= indexFrom && index < indexToShow);
  }
}
