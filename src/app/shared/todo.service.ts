import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  SERVER_URL = 'http://localhost:8080/api/';


  constructor(private httpClient: HttpClient) { }

  public getTodos() {
    return this.httpClient.get(this.SERVER_URL + 'todos');
  }

  public getTodo(todoId: number) {
      return this.httpClient.get(`${this.SERVER_URL + 'todos'}/${todoId}`);
  }
  public createPolicy(todo: Todo) {
    return this.httpClient.post(`${this.SERVER_URL + 'todos'}`, todo);
  }

  public deletePolicy(todoId) {
    return this.httpClient.delete(`${this.SERVER_URL + 'todos'}/${todoId}`);
  }
  public updatePolicy(todo: Todo) {
    return this.httpClient.put(`${this.SERVER_URL + 'todos'}/${todo.id}`, todo);
  }
}
