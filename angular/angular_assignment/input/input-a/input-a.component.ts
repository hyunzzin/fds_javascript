import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-a',
  template: `
    <input type="text" placeholder="input A"
      [value]="finalA"
      (input)="giveapp.emit(input.value)" 
    #input>
  `,
  styles: []
})
export class InputAComponent implements OnInit {
  @Input() finalA;
  @Output() giveapp = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

}
