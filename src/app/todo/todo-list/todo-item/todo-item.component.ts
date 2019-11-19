import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { Store } from '@ngrx/store';

import * as TodoListAction from '../../../store/todo-list.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor(private store: Store<{todoList: { todos: Todo[]}}>) { }

  ngOnInit() {
  }

  onChange() {
    this.store.dispatch(new TodoListAction.UpdateStateOfDo({index: this.todo.id, todo: this.todo}));
  }

}
