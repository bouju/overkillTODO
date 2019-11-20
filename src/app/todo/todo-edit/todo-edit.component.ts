import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as todoAction from '../../todo/todo-list/store/todo-list.action';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todoForm: FormGroup;

  constructor(private store: Store<fromApp.AppState>,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let id ;
    let title = '';
    let descritpion = '';
    let stateOfDo = false;

    this.store.select('todoList').subscribe(
      (todosState) => {
        id = todosState.todos.reduce((max, todo) => (todo.id > max ? todo.id : max),
        todosState.todos[0].id) + 1 ;

        this.todoForm = new FormGroup({
          id: new FormControl(id, Validators.required),
          title: new FormControl(title, Validators.required),
          description: new FormControl(descritpion),
          stateOfDo: new FormControl(stateOfDo)
        });
      }
    );
  }

  onSubmit() {
    this.store.dispatch(new todoAction.AddTodo(this.todoForm.value));
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
