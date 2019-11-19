import { Action } from '@ngrx/store';
import { Todo } from '../shared/todo.model';

export const ADD_TODO = 'ADD_TODO';

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: Todo) {}
}

export const ADD_TODOS = 'ADD_TODOS';

export class AddTodos implements Action {
  readonly type = ADD_TODOS;

  constructor(public payload: Todo[]) {}

}

/* export const GET_TODOLIST = 'GET_TODOLIST';

export class GetTodoList implements Action {
  readonly type = GET_TODOLIST;
  payload: Todo;
} */
