import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoStartComponent } from './todo/todo-start/todo-start.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/todo', pathMatch: 'full'},
  {path: 'todo', component: TodoComponent, children: [
    {path: '', component: TodoStartComponent},
    {path: ':id', component: TodoDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
