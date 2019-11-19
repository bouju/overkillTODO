import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/shared/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Observable<{todos: Todo[]}>;

  constructor(private store: Store<{todoList: { todos: Todo[]}}>) { }

  ngOnInit() {
    this.todos = this.store.select('todoList');
  }

}
