import { Todo } from 'src/app/shared/todo.model';
import { Action } from '@ngrx/store';
import * as TodoListAction from './todo-list.action';
import { stat } from 'fs';

const initialState = {
  todos: Array<Todo>()
};

export function todoListReducer(
  state = initialState,
  action: TodoListAction.TodoListActions
) {
  switch (action.type) {
    case TodoListAction.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TodoListAction.ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, ...action.payload ]
      };
    case TodoListAction.UPDATE_STATE_OF_DO:
      const todo = state.todos[action.payload.index];
      todo.stateOfDo = !todo.stateOfDo;
      const updateTodo = {
        ...todo,
        ...action.payload.todo
      };
      const updateTodos = [...state.todos];
      updateTodos[action.payload.index] = updateTodo;

      return {
        ...state,
        todos: updateTodos
      };
      default:
        return state;
  }
}
