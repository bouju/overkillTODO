import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/shared/todo.model';
import { Observable } from 'rxjs';

import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Observable<{todos: Todo[]}>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.todos = this.store.select('todoList');
  }

}
