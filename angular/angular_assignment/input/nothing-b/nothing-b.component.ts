import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nothing-b',
  template: `
    <app-input-c 
    (giveB)="giveappbyC.emit($event)"
    [content]="content"></app-input-c>
  `,
  styles: []
})
export class NothingBComponent implements OnInit {
  @Input() content: string;
  @Output() giveappbyC = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

}
