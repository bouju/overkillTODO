import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    // tslint:disable-next-line: prefer-const
    let todos: Todo[] = [
      // tslint:disable-next-line: max-line-length
      { id: 0, title: 'Make an awesome todo manager', stateOfDo: true, description: 'Our fantastic product owner has a wonderful, amazing and revolutionary idea... he wants to build a new Todo application. He has a pretty accurate vision of what he wants, and so comes with a backlog'},
      { id: 1, title: 'Present my todo manager', stateOfDo: false, description: ''}
    ];

    return {todos};
  }
}
