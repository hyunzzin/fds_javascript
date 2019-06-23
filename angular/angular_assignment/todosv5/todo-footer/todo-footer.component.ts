import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  template: `
    <div class="footer">
      <div class="complete-all">
        <input class="custom-checkbox" type="checkbox" id="ck-complete-all"
          [checked]="checkedEvery"
          (change)="checked.emit(all.checked)"
        #all>
        <label for="ck-complete-all">Mark all as complete</label>
      </div>
      <div class="clear-completed">
        <button class="btn">Clear completed (<span class="completed-todos">{{clearCompleted}}</span>)</button>
        <strong class="active-todos"> {{itemLeft}}</strong> items left
      </div>
    </div>
  `,
  styles: []
})
export class TodoFooterComponent {
  @Input() checkedEvery;
  @Input() clearCompleted;
  @Input() itemLeft;

  @Output() checked = new EventEmitter;
}
