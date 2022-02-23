import { Component, OnInit } from '@angular/core';
import { EnumerablesTypesApp } from 'src/app/models/enumerablesTypesApp';

@Component({
  selector: 'app-charts-example',
  templateUrl: './charts-example.component.html',
  styleUrls: ['./charts-example.component.scss']
})
export class ChartsExampleComponent implements OnInit {
  // Data Char Bar
  basicBarData: any;
  multiAxisBarData: any;
  stackedBarData: any;

  // Data Char Doughnut
  basicDoughnutData: any;

  // Data Char Line
  basicLineData: any;
  multiAxisLineData: any;

  // Option Char Doughnut
  chartDoughnutOptions: any;

  // Option Char Line
  basicLineOptions: any;
  multiAxisLineOptions: any;
  lineStylesData: any;

  // Option Char Bar
  basicBarOptions: any;
  horizontalBarOptions: any;
  multiAxisBarOptions: any;
  stackedBarOptions: any;

  // Others
  enumSize = EnumerablesTypesApp.enumSize;
  enumTypeTheme = EnumerablesTypesApp.enumTypeTheme;
  theme = this.enumTypeTheme.dark;
  labelButtonTheme = "Change to " + this.theme + " Theme";

  ngOnInit(): void {
    this.loadDataChartBar();
    this.loadDataChartLine();
    this.loadDataChartDoughnut();
    this.changesTheme();
  }

  loadDataChartLine() {
    this.basicLineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5',
          tension: .4
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#FFA726',
          tension: .4
        }
      ]
    };

    this.multiAxisLineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Dataset 1',
        fill: false,
        borderColor: '#42A5F5',
        yAxisID: 'y',
        tension: .4,
        data: [65, 59, 80, 81, 56, 55, 10]
      }, {
        label: 'Dataset 2',
        fill: false,
        borderColor: '#00bb7e',
        yAxisID: 'y1',
        tension: .4,
        data: [28, 48, 40, 19, 86, 27, 90]
      }]
    };

    this.lineStylesData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: .4,
          borderColor: '#42A5F5'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderDash: [5, 5],
          tension: .4,
          borderColor: '#66BB6A'
        },
        {
          label: 'Third Dataset',
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: '#FFA726',
          tension: .4,
          backgroundColor: 'rgba(255,167,38,0.2)'
        }
      ]
    };

    this.multiAxisLineOptions = {
      stacked: false,
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
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: '#495057'
          },
          grid: {
            drawOnChartArea: false,
            color: '#ebedef'
          }
        }
      }
    };
  }

  loadDataChartDoughnut() {
    this.basicDoughnutData = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    };
  }

  loadDataChartBar() {
    this.basicBarData = {
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

    this.multiAxisBarData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Dataset 1',
        backgroundColor: [
          '#EC407A',
          '#AB47BC',
          '#42A5F5',
          '#7E57C2',
          '#66BB6A',
          '#FFCA28',
          '#26A69A'
        ],
        yAxisID: 'y',
        data: [65, 59, 80, 81, 56, 55, 10]
      }, {
        label: 'Dataset 2',
        backgroundColor: '#78909C',
        yAxisID: 'y1',
        data: [28, 48, 40, 19, 86, 27, 90]
      }]
    };

    this.stackedBarData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        type: 'bar',
        label: 'Dataset 1',
        backgroundColor: '#42A5F5',
        data: [
          50,
          25,
          12,
          48,
          90,
          76,
          42
        ]
      }, {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: '#66BB6A',
        data: [
          21,
          84,
          24,
          75,
          37,
          65,
          34
        ]
      }, {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: '#FFA726',
        data: [
          41,
          52,
          24,
          74,
          23,
          21,
          32
        ]
      }]
    };

    this.horizontalBarOptions = {
      indexAxis: 'y',
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

    this.multiAxisBarOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        },
        tooltips: {
          mode: 'index',
          intersect: true
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
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            min: 0,
            max: 100,
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
            color: '#ebedef'
          },
          ticks: {
            min: 0,
            max: 100,
            color: '#495057'
          }
        }
      }
    };

    this.stackedBarOptions = {
      tooltips: {
        mode: 'index',
        intersect: false
      },
      responsive: true,
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true
        }]
      }
    };
  }

  changesTheme() {
    if (this.theme == this.enumTypeTheme.dark) {
      this.applyDarkTheme();
      this.theme = this.enumTypeTheme.light;
      this.labelButtonTheme = "Change to " + this.theme + " Theme";
    }
    else {
      this.applyLightTheme();
      this.theme = this.enumTypeTheme.dark;
      this.labelButtonTheme = "Change to " + this.theme + " Theme";
    }
  }

  applyDarkTheme() {
    this.basicBarOptions = {
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

    this.horizontalBarOptions = {
      indexAxis: 'y',
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

    this.multiAxisBarOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        },
        tooltips: {
          mode: 'index',
          intersect: true
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
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            min: 0,
            max: 100,
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
            color: 'rgba(255,255,255,0.2)'
          },
          ticks: {
            min: 0,
            max: 100,
            color: '#ebedef'
          }
        }
      }
    };

    this.stackedBarOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        },
        tooltips: {
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    };

    this.chartDoughnutOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      }
    };

    this.basicLineOptions = {
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

    this.multiAxisLineOptions = {
      stacked: false,
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
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: '#ebedef'
          },
          grid: {
            drawOnChartArea: false,
            color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    };
  }

  applyLightTheme() {
    this.basicBarOptions = {
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

    this.horizontalBarOptions = {
      indexAxis: 'y',
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

    this.multiAxisBarOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        },
        tooltips: {
          mode: 'index',
          intersect: true
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
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            min: 0,
            max: 100,
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
            color: '#ebedef'
          },
          ticks: {
            min: 0,
            max: 100,
            color: '#495057'
          }
        }
      }
    };

    this.stackedBarOptions = {
      plugins: {
        tooltips: {
          mode: 'index',
          intersect: false
        },
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };

    this.chartDoughnutOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      }
    };

    this.basicLineOptions = {
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

    this.multiAxisLineOptions = {
      stacked: false,
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
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: '#495057'
          },
          grid: {
            drawOnChartArea: false,
            color: '#ebedef'
          }
        }
      }
    };
  }
}
