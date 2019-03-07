import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MaterialModule } from './../material/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopularMoviesGridComponent } from './popular-movies-grid/popular-movies-grid.component';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ScrollingModule } from '@angular/cdk/scrolling';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SingleMovieJumboCardComponent } from './single-movie-jumbo-card/single-movie-jumbo-card.component';

const sharedComponentsList = [
  SearchBarComponent,
  MovieCardComponent,
  PopularMoviesGridComponent,
  SingleMovieJumboCardComponent,
]

@NgModule({
  declarations: [
    ...sharedComponentsList,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    // ScrollingModule,
    InfiniteScrollModule,
    FlexLayoutModule

  ],
  exports: [
    ...sharedComponentsList
  ]
})
export class SharedComponentsModule { }
