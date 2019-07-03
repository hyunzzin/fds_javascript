import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodosFilterPipe } from '../todos-filter.pipe';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul class="todos" *ngIf="todos; else loading">
      <li id="myId" class="todo-item" *ngFor="let todo of todos |todosFilter : navState">
        <input class="custom-checkbox" type="checkbox" id="ck-{{todo.id}}"
          [checked]="todo.completed"
          (change)="completedChange.emit(todo.id)"
        >
        <label for="ck-{{todo.id}}">{{todo.content}}</label>
        <i class="remove-todo far fa-times-circle"
          (click)="removeTodo.emit(todo.id)"
        ></i>
      </li>
    </ul>
    <ng-template #loading>
      <div class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
    </ng-template>
  `,
  styles: [`
    .spinner {
      margin: 100px auto;
      width: 40px;
      height: 40px;
      position: relative;
      text-align: center;
      
      -webkit-animation: sk-rotate 2.0s infinite linear;
      animation: sk-rotate 2.0s infinite linear;
    }
    
    .dot1, .dot2 {
      width: 60%;
      height: 60%;
      display: inline-block;
      position: absolute;
      top: 0;
      background-color: orangered;
      border-radius: 100%;
      
      -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
      animation: sk-bounce 2.0s infinite ease-in-out;
    }
    
    .dot2 {
      top: auto;
      bottom: 0;
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }
    
    @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}
    @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}
    
    @-webkit-keyframes sk-bounce {
      0%, 100% { -webkit-transform: scale(0.0) }
      50% { -webkit-transform: scale(1.0) }
    }
    
    @keyframes sk-bounce {
      0%, 100% { 
        transform: scale(0.0);
        -webkit-transform: scale(0.0);
      } 50% { 
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
    }
  `]
})
export class TodoListComponent {
  @Input() todos;
  @Input() navState;

  @Output() completedChange = new EventEmitter;
  @Output() removeTodo = new EventEmitter;
}
