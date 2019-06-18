import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input placeholder="enter todo" (keyup.enter)="enter.emit(input)" #input>
  `,
  styles: []
})
export class TodoInputComponent {
  @Output() enter = new EventEmitter();
}
