import { Injectable } from '@angular/core';
import { Todo } from './../models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  _todos: Todo[];

  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=2000';
  constructor(private http: HttpClient) {

  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`)
  };

  toggleCompleted(todo: Todo): Observable<any> {
    const url = this.todosUrl + '/' + todo.id;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = this.todosUrl + '/' + todo.id;
    return this.http.delete<Todo>(url, httpOptions);
  }
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
  updateTodo(todo: Todo): Observable<Todo> {
    const url = this.todosUrl + '/' + todo.id;
    return this.http.put<Todo>(url, todo, httpOptions);
  }
}
