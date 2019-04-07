import { Component, OnInit, Input, OnDestroy } from '@angular/core';
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
export class SingleMovieJumboCardComponent implements OnInit, OnDestroy {
  public id: string | number;
  public movieData: MovieData;
  public title: string;
  private loading: boolean = true;
  public overview: string;
  public poster_base_url: string = 'https://image.tmdb.org/t/p/w342/';
  private placeholder_image = 'https://via.placeholder.com/150/0000FF/808080 ?Text=Loading...';
  public poster_url: string = this.placeholder_image;
  fadeInContent = true;
  fadeOutContent = false;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.url.subscribe(url => {
      console.log(url);
      // this.fadeOutContent = true;
      this.fadeInContent = false;
      setTimeout(() => { this.fadeInContent = true; this.fadeOutContent = false }, 500);
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.clearMovieData();
      // this.fadeOutContent = true;
      this.loading = true;
      this.fadeInContent = false;
      this.id = params.get("id")
      console.log(this.id);
      this.apiService.getMovie(this.id).subscribe(data => {
        console.log('got movie data: ', data);
        this.loading = false;
        this.movieData = data;
        this.poster_url = this.movieData.poster_path ? this.poster_base_url + this.movieData.poster_path : this.placeholder_image;
        this.title = data.title;
        this.overview = data.overview;
        console.log('title: ', this.movieData.title)
        // this.fadeInContent = true;
        // this.fadeOutContent = false;
        setTimeout(() => { this.fadeInContent = true; this.fadeOutContent = false }, 500);
      })
    })
  }
  clearMovieData(): void {
    this.title = null;
    this.overview = null;
    this.poster_url = null;
    console.log('movie data cleared');
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('destroy single movie jumbo card')
    this.fadeInContent = false;
    // this.fadeOutContent = true;
  }
}
