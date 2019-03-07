import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../../services/api.service';

export interface MovieData {
  poster_path: string,
  title: string,
  overview: string,
}

@Component({
  selector: 'app-single-movie-jumbo-card',
  templateUrl: './single-movie-jumbo-card.component.html',
  styleUrls: ['./single-movie-jumbo-card.component.scss']
})
export class SingleMovieJumboCardComponent implements OnInit {
  public id: string | number;
  public movieData: MovieData;
  public title: string;
  public overview: string;
  public poster_base_url: string = 'https://image.tmdb.org/t/p/w342/';
  public poster_url: string = 'https://via.placeholder.com/150/0000FF/808080 ?Text=Loading...';
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")
      console.log(this.id);
      this.apiService.getMovie(this.id).subscribe(data => {
        console.log('got movie data: ', data);
        this.movieData = data;
        this.poster_url = this.poster_base_url + this.movieData.poster_path;
        this.title = data.title;
        this.overview = data.overview;
        console.log('title: ', this.movieData.title)
      })
    })
  }
}
