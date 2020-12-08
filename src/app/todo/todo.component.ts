import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './Model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoListe: Todo[] = [];
  todo = new Todo();
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoListe = this.todoService.getTodos();
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }
  deleteTodo(actualTodo: Todo) {
    this.todoService.deleteTodo(actualTodo);
  }
}
