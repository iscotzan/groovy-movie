
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-watch-item',
  templateUrl: './add-watch-item.component.html',
  styleUrls: ['./add-watch-item.component.scss']
})
export class AddWatchItemComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string = '';
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }
    this.addTodo.emit(todo);
  }
}
