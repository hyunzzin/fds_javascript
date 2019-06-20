import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-c',
  template: `
    <input type="text" placeholder="input C"
    (input)="giveB.emit(input.value)"
    [value]="content" #input>
  `,
  styles: []
})
export class InputCComponent implements OnInit {
  @Input() content: string;
  @Output() giveB = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

}
