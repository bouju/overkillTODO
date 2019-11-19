import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

import * as TodoListAction from '../store/todo-list.action';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoServ: TodoService, private store: Store<{todoList: { todos: Todo[]}}>) { }

  ngOnInit() {
    this.todoServ.getTodos().subscribe((Todos: Todo[]) => {
      Todos.forEach((todo: Todo) => {
        this.store.dispatch( new TodoListAction.AddTodo(todo));
      });
    });
  }

}
