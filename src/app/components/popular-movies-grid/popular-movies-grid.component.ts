import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { PaginatorModel } from '../../models/paginator.model';
import { Router } from '@angular/router';
import { route_paths } from './../../app-routing-paths.dict';

@Component({
  selector: 'app-popular-movies-grid',
  templateUrl: './popular-movies-grid.component.html',
  styleUrls: ['./popular-movies-grid.component.scss']
})
export class PopularMoviesGridComponent implements OnInit {

  pageNum: number = 1;
  completePopularMoviesList: Array<PaginatorModel> = [];
  filteredPopularMoviesList: Array<PaginatorModel> = [];
  breakpoint: number = (window.innerWidth <= 600) ? 1 : 3;

  constructor(private apiService: ApiService, public router: Router) {

  }

  ngOnInit() {
    this.getPopularMovies(1);
  }
  getPopularMovies(page: number = 1) {
    this.apiService.getPopular(page).subscribe(res => {
      console.log('got popular movies page ', page, ': ', res.results);
      this.completePopularMoviesList.push(...res.results)
      this.completePopularMoviesList.forEach(np => np['isMovie'] = true);
      page === 1 ? this.filteredPopularMoviesList = this.completePopularMoviesList : this.filteredPopularMoviesList;
    });
  }
  onScrollDown() {
    // console.log('scrolled down!');
    this.pageNum++;
    this.getPopularMovies(this.pageNum);
  }

  onSearchInput(filteredList) {
    this.filteredPopularMoviesList = filteredList;
    // console.log('got new list from search input, ', this.filteredPopularMoviesList);
    // console.log('got old list, ', this.completePopularMoviesList);
  }

  onSelectedFilter(selectionArray) { //single selection here will redirect to movie details page.
    // console.log('selected: ', selectionArray);
    if (selectionArray[0]) {
      const selectedId = selectionArray[0].id;
      this.router.navigate([route_paths.detailsPage, selectedId]);
    };
    return;
  }
}
