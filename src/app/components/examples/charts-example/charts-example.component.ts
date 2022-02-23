import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-example',
  templateUrl: './charts-example.component.html',
  styleUrls: ['./charts-example.component.scss']
})
export class ChartsExampleComponent implements OnInit {
  basicData: any;
  basicOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#FFA726',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
    
  }

  applyDarkTheme() {
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        y: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    };
  }

  applyLightTheme() {
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
  }
}
