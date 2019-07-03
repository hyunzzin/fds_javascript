import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../app/types/todo.interface';
import { navItem } from '../app/types/navItem.interface';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: Todo[], navState: navItem): any {
    return todos.filter(todo => {
      if (navState === 'Active') return !todo.completed;
      if (navState === 'Completed') return todo.completed;
      return true;
    })
  }

}
