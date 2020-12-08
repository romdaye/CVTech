import { Injectable } from '@angular/core';
import { Todo } from './../Model/todo';
import { LoggerService } from './../../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

  constructor(private loggerService: LoggerService) {}
  loggerTodo(): void {
    this.loggerService.log(this.todos);
  }
  addTodo(nouveauTodo: Todo) {
    this.todos.push(nouveauTodo);
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  deleteTodo(deletedTodo: Todo) {
    const index = this.todos.indexOf(deletedTodo);
    this.todos.splice(index, 1);
  }
}
