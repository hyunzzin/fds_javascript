import { Component } from '@angular/core';

@Component({
  selector: 'app-analog',
  template: `
  <div class="clock">
    <div class="analog-clock">
      <div class="hour hand" 
      [style.transform]="analogHour"
      ></div>
      <div class="minute hand"
      [style.transform]="analogMin"
      ></div>
      <div class="second hand"
      [style.transform]="analogSec"
      ></div>
      <div class="center-circle"></div>
    </div>
    <div class="digital-clock">{{zero(hour)}}:{{zero(min)}}:{{zero(sec)}}</div>
  </div>
  `,
  styles: [`
  .analog-clock {
    position: relative;
    margin: 100px auto 0;
    width: 200px;
    height: 200px;
    background-color: aliceblue;
    border-radius: 50%;
  }

  .hand {
    position: absolute;
    left: 50%;
    width: 1px;
    height: 100px;
    /* 자바스크립트에 의해 덮어써진다. */
    /* transform: translate3d(-50%, 0, 0); */
    transform-origin: 100% 100%;
  }

  .hour {
    background-color: #f44336;
  }

  .minute {
    background-color: #3f51b5;
  }

  .second {
    background-color: #9e9e9e;
  }

  .center-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 12px;
    height: 12px;
    background-color: black;
    border-radius: 50%;
  }

  .digital-clock {
    position: absolute;
    top: 350px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    font-size: 2em;
    font-family: 'Source Code Pro', monospace;
  }
  `]
})
export class AnalogComponent {
  date: any;
  hour: number = 0;
  min: number = 0;
  sec: number = 0;
  analogHour: any;
  analogMin: any;
  analogSec: any;

  constructor() {
    setInterval(() => {
      this.date = new Date();
      this.hour = this.date.getHours();
      this.min = this.date.getMinutes();
      this.sec = this.date.getSeconds();

      this.analogHour = 'rotate(' + (this.hour % 12) * 30 + this.min * (30 / 60) + 'deg)';
      this.analogMin = 'rotate(' + this.min * 6 + 'deg)';
      this.analogSec = 'rotate(' + this.sec * 6 + 'deg)';
    })
  }

  zero(num: number) {
    return Math.floor(num / 10) ? num : '0' + num;
  }



}
