import { Todo } from 'src/app/shared/todo.model';
import { Action } from '@ngrx/store';
import * as TodoListAction from './todo-list.action';

const initialState = {
  todos: Array<Todo>()
};

export function todoListReducer(state = initialState, action: TodoListAction.AddTodo) {
  switch (action.type) {
    case TodoListAction.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
      break;
      default:
        return state;
  }
}
