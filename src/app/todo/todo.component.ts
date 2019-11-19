import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

import * as TodoListAction from './todo-list/store/todo-list.action';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoServ: TodoService,
              private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.todoServ.getTodos().subscribe((data: Todo[]) => {
        this.store.dispatch( new TodoListAction.AddTodos(data));
    });
  }

}
