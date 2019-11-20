import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './shared/data.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todoListReducer } from './todo/todo-list/store/todo-list.reducer';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { TodoItemComponent } from './todo/todo-list/todo-item/todo-item.component';
import { IsDonePipe } from './shared/is-done.pipe';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoStartComponent } from './todo/todo-start/todo-start.component';
import { TodoEditComponent } from './todo/todo-edit/todo-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoEffects } from './todo/todo-list/store/todo-list.effects';





@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    HeaderComponent,
    TodoItemComponent,
    IsDonePipe,
    TodoDetailComponent,
    TodoStartComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    StoreModule.forRoot({todoList: todoListReducer}),
    NoopAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatListModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    EffectsModule.forRoot([TodoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
