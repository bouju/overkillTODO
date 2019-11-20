import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/shared/todo.model';
import { Observable } from 'rxjs';

import * as fromApp from '../../store/app.reducer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Observable<{todos: Todo[]}>;

  constructor(private store: Store<fromApp.AppState>,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.todos = this.store.select('todoList');
  }

  onNewTodo() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
