import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-nav',
  templateUrl: './todo-nav.component.html',
  styleUrls: ['./todo-nav.component.css']
})
export class TodoNavComponent implements OnInit {
  @Input() navItem;
  @Input() navState;

  @Output() changeNav = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
