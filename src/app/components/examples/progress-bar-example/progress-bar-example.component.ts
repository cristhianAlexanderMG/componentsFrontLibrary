import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-example',
  templateUrl: './progress-bar-example.component.html',
  styleUrls: ['./progress-bar-example.component.scss']
})
export class ProgressBarExampleComponent implements OnInit {
  value: number = 20;
  valueDynamic: number = 0;

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.valueDynamic = this.valueDynamic + Math.floor(Math.random() * 10) + 1;
      if (this.valueDynamic >= 100) {
        this.valueDynamic = 100;
        clearInterval(interval);
      }
    }, 2000);
  }

}
