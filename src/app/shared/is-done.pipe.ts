import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.model';

@Pipe({
  name: 'isDone',
  pure: false
})
export class IsDonePipe implements PipeTransform {

  transform(todoList: Todo[], askedType: boolean): Todo[] {
    if ( todoList.length === 0) {
      return todoList;
    }

    const resultArray = [];
    for (const todo of todoList) {
      if (todo.stateOfDo === askedType) {
        resultArray.push(todo);
      }
    }
    return resultArray;
  }

}
