import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-input-a (giveapp)="inputContent($event)" [finalA]="content"></app-input-a>
    <br/>
    <app-nothing-b [content]="content" (giveappbyC)="inputContent($event)"></app-nothing-b>
  `,
  styles: []
})
export class AppComponent {

  content = '';

  inputContent(event) {
    this.content = event;
  }
}
