import { Todo } from '../shared/todo.model';
import { DataService } from '../shared/data.service';

export default class TodoState {
  todos: Todo[];
}

export const initializeState = () => {
  return { todos: Array<Todo>() };

};
