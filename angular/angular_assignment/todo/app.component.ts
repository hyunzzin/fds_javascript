import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-todo-input (enter)="addTodo($event)"></app-todo-input>
    <app-todo-list 
      [todos]="todos"
      (remove)="removeTodo($event)"
      (checked)="checked($event)"
    ></app-todo-list>
  `,
  styles: []
})
export class AppComponent {
  todos = [{ id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
  ];

  addTodo(event) {
    this.todos = [{ id: this.generateId(), content: event.value, completed: false }, ...this.todos];
    event.value = '';
  }
  generateId() {
    return this.todos.length ? Math.max(...this.todos.map((item) => item.id)) + 1 : 1;
  }

  checked(id) {
    this.todos = this.todos.map((item) => id === item.id ? { ...item, completed: !item.completed } : item);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((item) => id !== item.id);
  }
}
