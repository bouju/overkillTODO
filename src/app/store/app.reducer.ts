import { ActionReducerMap } from '@ngrx/store';

import * as fromTodoList from '../todo/todo-list/store/todo-list.reducer';

export interface AppState {
  todoList: fromTodoList.State;
}
