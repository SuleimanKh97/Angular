import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnDestroy {
  timeLeft: number = 30;
  interval: any;

  constructor() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) this.timeLeft--;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log("تم إيقاف مؤقت العرض.");
  }
}
