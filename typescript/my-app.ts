import { Component } from '@angular/core';
import { generate } from 'rxjs';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  template: `
  <input type="text" placeholder="Enter Todo!" (keyup.enter)="addTodo(input)" #input>
  <ul class="todos">
    <li *ngFor="let todo of todos">
      <input type="checkbox" [checked]="todo.completed" (change)="toggleTodo(todo.id)">
        <span [class.completed] = "todo.completed">{{todo.content}}</span>
      <button (click)="removeTodo(todo.id)">X</button>
    </li>
  </ul>
  <pre>{{todos | json}}</pre>`
  ,
  styles: [`.completed{
    text-decoration : line-through;
  }
  `]
})
export class AppComponent {
  todos: Todo[] = [{ id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
  ];
  addTodo(input: HTMLInputElement) {
    this.todos = [{ id: this.generateId(), content: input.value, completed: false }, ...this.todos]
    input.value = '';
  }
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(item => item.id)) + 1 : 1;
  }

  toggleTodo(id) {
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
  }
}
