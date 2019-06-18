import { Component } from '@angular/core';

@Component({
  selector: 'app-stop',
  template: `
  <div class="stop-watch">
    <div class="display">{{zero(min)}}:{{zero(sec)}}:{{zero(mil)}}</div>
    <button class="control" (click)="startStop()">{{button
    }}</button>
  </div>
  `,
  styles: [`
  .stop-watch {
    font-family: 'Source Code Pro', monospace;
    text-align: center;
    font-size: 3em;
    padding: 30px;
  }

  .control {
    width: 300px;
    padding: 5px;
    margin-top: 15px;
    font-size: 36px;
    font-weight: bold;
    border: 2px solid #f44336;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }

  .control:hover {
    background: #f44336;
    color: aliceblue;
  }
  `]
})
export class StopComponent {
  button: string = 'Start';
  mil: any = 0;
  sec: any = 0;
  min: any = 0;
  timer: any;

  zero(num: number) {
    return Math.floor(num / 10) ? num : '0' + num;
  }

  startStop() {
    if (this.button === 'Start') {
      this.button = 'Stop';
      return this.timer = setInterval(() => {
        this.mil++;
        if (this.mil >= 100) {
          this.mil = 0;
          this.sec++;
        }
        if (this.sec >= 60) {
          this.sec = 0;
          this.min++;
        }
      }, 10);
    } else {
      this.button = 'Start';
      clearInterval(this.timer);
    }
  }
}
