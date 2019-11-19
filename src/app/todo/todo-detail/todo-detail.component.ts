import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/shared/todo.model';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import * as fromApp from '../../store/app.reducer';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  todos: Observable<{todos: Todo[]}>;
  todo: Todo = new Todo(-1, '', false, '');
  id: number;

  constructor(private store: Store<fromApp.AppState>,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.pipe(
      map((params: Params) => {
        // tslint:disable-next-line: no-string-literal
        return +params['id'];
      }),
      switchMap(id => {
        this.id = id;
        return this.store.select('todoList');
      }),
      map(todoState => {
        return todoState.todos.find((todo, index) => {
          return index === this.id;
        });
      })
    ).subscribe(todo => {
      this.todo = todo;
    });
  }

}
