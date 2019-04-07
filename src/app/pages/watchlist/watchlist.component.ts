
import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { TodoService } from './../../services/todo.service';
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  todos: Todo[];
  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
  deleteTodo(todo: Todo) {
    console.log('delete me ', todo);
    this.todos = this.todos.filter(t => t.id != todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }
  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }
  editTodo(todo: Todo) {
    console.log('transmission received todo: ', todo);
    this.todoService.updateTodo(todo).subscribe(todo => {
      console.log(todo);
      this.todos.push(todo);
    })
  }
}
