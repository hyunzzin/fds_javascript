import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  @Input() checkedNumber;
  @Input() leftNumber;
  @Input() autoEvery;
  @Output() checkedAll = new EventEmitter();
  @Output() clearCompleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
