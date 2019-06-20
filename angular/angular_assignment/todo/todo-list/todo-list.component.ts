import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos">
        <input type="checkbox" [checked]="todo.completed" (change)="checked.emit(todo.id)">
          <span [class.line]="todo.completed">
            {{todo.content}} 
          </span>
        <button (click)="remove.emit(todo.id)">X</button>
      </li>
      
    </ul>
  `,
  styles: [`
  .line{
    text-decoration : line-through;
  }
  `]
})
export class TodoListComponent {
  @Input() todos;
  @Output() checked = new EventEmitter();
  @Output() remove = new EventEmitter();
}
