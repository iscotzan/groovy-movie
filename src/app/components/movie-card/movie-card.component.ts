import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { route_paths } from './../../app-routing-paths.dict';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() id: Number;
  @Input() title: string;
  @Input() overview: string;
  @Input() poster_path: string;
  poster_base_url: string = 'https://image.tmdb.org/t/p/w300/';
  poster_url: string;
  movieDetailsRoute: string;

  constructor(public router: Router) { }

  ngOnInit() {
    this.poster_url = this.poster_base_url + this.poster_path;
    this.movieDetailsRoute = route_paths.detailsPage + this.id;
    this.overview = this.overview.substring(0, 200).split(' ').slice(0, -1).join(' ') + '...';

  }
  movieSelected() {
    this.router.navigate([this.movieDetailsRoute])
    document.getElementsByClassName('mat-drawer-content')[0].scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    })
  }
}
