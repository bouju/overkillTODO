import { Action } from '@ngrx/store';
import { Todo } from '../../../shared/todo.model';

export const ADD_TODO_START = 'ADD_TODO_START';
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODOS = 'ADD_TODOS';
export const UPDATE_STATE_OF_DO = 'UPDATE_STATE_OF_DO';

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: Todo) {}
}

export class AddTodoStart implements Action {
  readonly type = ADD_TODO_START;

  constructor(public payload: Todo) {}
}

export class AddTodos implements Action {
  readonly type = ADD_TODOS;

  constructor(public payload: Todo[]) {}

}

export class UpdateStateOfDo implements Action {
  readonly type = UPDATE_STATE_OF_DO;

  constructor(public payload: {index: number, todo: Todo}) {}

}

export type TodoListActions = AddTodo
 | AddTodos
 | UpdateStateOfDo;
