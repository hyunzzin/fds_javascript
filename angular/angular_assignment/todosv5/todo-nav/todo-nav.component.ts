import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-nav',
  template: `
    <ul class="nav">
    <li id="{{nav}}" 
      *ngFor="let nav of nav"
      [class.active]="nav === navState"
      (click)="changeNavState.emit(nav)"
      >{{nav}}</li>
    </ul>
  `,
  styles: []
})
export class TodoNavComponent {
  @Input() navState;
  @Input() nav;

  @Output() changeNavState = new EventEmitter;
}
