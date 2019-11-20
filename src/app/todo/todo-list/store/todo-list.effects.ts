import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { TodoService } from 'src/app/shared/todo.service';

import * as TodoAction from './todo-list.action';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable()
export class TodoEffects {

  @Effect()
  todoCreate = this.actions.pipe(
    ofType(TodoAction.ADD_TODO_START),
    switchMap( (TodoData: TodoAction.AddTodoStart) => {
      return this.todoServ.createTodo(TodoData.payload)
      .pipe(map(resData => {
        return of(new TodoAction.AddTodo(TodoData.payload));
      }));
    })
  );


  constructor(private actions: Actions,
              private todoServ: TodoService) {
  }
}
