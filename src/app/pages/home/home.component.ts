import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // Empty array movies which will be filled with the get data
  movies: any = [];

  // Calls an instance of MoviesService called moviesService

  constructor(private moviesService: MoviesService) {}

  // Returns data from MoviesService through an Observable
  // We then Subscribe to the Observable which means we wait for the data
  ngOnInit(): void {
    this,
      this.moviesService.getMovies().subscribe((response: any) => {
        this.movies = response.results;
        console.log(this.movies);
      });
  }
}
