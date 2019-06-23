import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from './todo.interface';
import { navItem } from './nav-item';

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {

  transform(todos: Todo[], navState: navItem): any {
    if (todos) {
      return todos.filter(todo => {
        if (navState === 'Active') return !todo.completed;
        if (navState === 'Completed') return todo.completed;
        return true;
      })
    }
  }

}
