import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  template: `
    <input class="input-todo" placeholder="What needs to be done?" autofocus
    (keyup.enter)="addTodo.emit(input)"
    #input
    >
  `,
  styles: []
})
export class TodoFormComponent {
  @Output() addTodo = new EventEmitter;
}
