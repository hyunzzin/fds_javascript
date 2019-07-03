import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../types/todo.interface';
import { navItem } from '../types/navItem.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Input() navState: navItem;
  @Output() removeTodo = new EventEmitter();
  @Output() toggle = new EventEmitter();
}
