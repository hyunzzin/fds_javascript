import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Input() todos;

  @Output() add = new EventEmitter();
  content: string;
  constructor() { }

  ngOnInit() { }
  addTodo() {
    const content = this.content && this.content.trim();
    this.content = '';
    if (!content) return;
    this.add.emit(content);
  }
}
