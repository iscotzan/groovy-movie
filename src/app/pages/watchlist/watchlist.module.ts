import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistComponent } from './watchlist.component';
import { WatchItemComponent } from './watch-item/watch-item.component';
import { AddWatchItemComponent } from './add-watch-item/add-watch-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './../../services/todo.service';
import { FormsModule } from '@angular/forms';

const components = [
  WatchlistComponent, WatchItemComponent, AddWatchItemComponent
]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodoService],
  exports: [...components],

})
export class WatchlistModule { }
