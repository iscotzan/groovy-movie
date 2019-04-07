
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from './../../../models/Todo';
import { TodoService } from './../../../services/todo.service';
@Component({
  selector: 'app-watch-item',
  templateUrl: './watch-item.component.html',
  styleUrls: ['./watch-item.component.scss']
})
export class WatchItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodoEmitter: EventEmitter<Todo> = new EventEmitter();
  @Output() editTodoEmitter: EventEmitter<Todo> = new EventEmitter();
  editTodo: boolean = false;
  title: string = '';
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.title = this.todo.title;
  }
  //set dynamic classes
  setClasses() {
    let classes: object = {
      todo: true,
      'is-completed': this.todo.completed,
    }
    return classes;
  }
  onToggle(todo): void {
    console.log('toggle', todo);
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    })
  }
  onDelete(todo): void {
    console.log('delete', todo);
    this.deleteTodoEmitter.emit(todo);
  }
  toggleEditMod(): void {
    this.editTodo = !this.editTodo;
  }
  onCancel(): void {
    this.editTodo = false;
  }
  onEdit(todo): void {
    console.log('emitting todo: ', todo, this.title);
    if (this.title.length > 0) {
      todo.title = this.title;
      this.editTodoEmitter.emit(todo);
    }
    this.editTodo = false;
  }
}
