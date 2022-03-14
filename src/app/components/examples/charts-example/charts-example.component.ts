import { Component, OnInit } from '@angular/core';
import { EnumerablesTypesApp } from 'src/app/models/enumerablesTypesApp';
import { ChartsService } from 'src/app/services/charts.service';

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

  // Data Char Line
  basicLineData: any;
  multiAxisLineData: any;

  // Data Char Doughnut
  doughnutData: any;

  // Data Char Polar Area
  polarAreaData: any;

  // Data Char Pie
  pieData: any;

  // Data Char Radar
  radarData: any;

  // Data Char Combo
  comboData: any;

  // Option Char Doughnut
  basicDoughnutOptions: any;

  // Option Char Combo
  basicComboOptions: any;

  // Option Char Radar
  basicRadarOptions: any;

  // Option Char Pie
  basicPieOptions: any;

  // Option Char Line
  basicLineOptions: any;
  multiAxisLineOptions: any;
  lineStylesData: any;

  // Option Char Bar
  basicBarOptions: any;
  horizontalBarOptions: any;
  multiAxisBarOptions: any;
  stackedBarOptions: any;

  // Option Char Polar Area
  basicPolarAreaOptions: any;

  // Others
  enumSize = EnumerablesTypesApp.enumSize;
  enumTypeTheme = EnumerablesTypesApp.enumTypeTheme;
  theme = this.enumTypeTheme.dark;
  labelButtonTheme = "Change to " + this.theme + " Theme";

  constructor(private chartsService: ChartsService) {

  }

  ngOnInit(): void {
    this.loadData();
    this.changesTheme();
  }

  loadData() {
    this.basicLineData = this.chartsService.getBasicLineData();
    this.multiAxisLineData = this.chartsService.getMultiAxisLineData();
    this.lineStylesData = this.chartsService.getLineStylesData();
    this.multiAxisLineOptions = this.chartsService.getMultiAxisLineOptions();
    this.doughnutData = this.chartsService.getDoughnutData();
    this.basicBarData = this.chartsService.getBasicBarData();
    this.multiAxisBarData = this.chartsService.getMultiAxisBarData();
    this.stackedBarData = this.chartsService.getStackedBarData();
    this.horizontalBarOptions = this.chartsService.getHorizontalBarOptions();
    this.multiAxisBarOptions = this.chartsService.getMultiAxisBarOptions();
    this.stackedBarOptions = this.chartsService.getStackedBarOptions();
    this.polarAreaData = this.chartsService.getPolarAreaData();
    this.pieData = this.chartsService.getPieData();
    this.radarData = this.chartsService.getRadarData();
    this.comboData = this.chartsService.getComboData();
    this.basicComboOptions = this.chartsService.getBasicComboOptions();
  }

  //#region Themes
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
    this.basicBarOptions = this.chartsService.getBasicBarOptionsDarkTheme();
    this.horizontalBarOptions = this.chartsService.getHorizontalBarOptionsDarkTheme();
    this.multiAxisBarOptions = this.chartsService.getMultiAxisBarOptionsDarkTheme();
    this.stackedBarOptions = this.chartsService.getStackedBarOptionsDarkTheme();
    this.basicDoughnutOptions = this.chartsService.getBasicDoughnutOptionsDarkTheme();
    this.basicLineOptions = this.chartsService.getBasicLineOptionsDarkTheme();
    this.multiAxisLineOptions = this.chartsService.getMultiAxisLineOptionsDarkTheme();

    this.basicPolarAreaOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      },
      scales: {
        r: {
          grid: {
            color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    };

    this.basicPieOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      }
    };

    this.basicRadarOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      },
      scales: {
        r: {
          pointLabels: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
          angleLines: {
            color: 'rgba(255,255,255,0.2)'
          }
        }
      }
    };

    this.basicComboOptions = {
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

    this.basicDoughnutOptions = {
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

    this.basicPolarAreaOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        r: {
          grid: {
            color: '#ebedef'
          }
        }
      }
    };

    this.basicPieOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      }
    };

    this.basicRadarOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        r: {
          pointLabels: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
          angleLines: {
            color: '#ebedef'
          }
        }
      }
    };

    this.basicComboOptions = {
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
  //#endregion Themes

}
