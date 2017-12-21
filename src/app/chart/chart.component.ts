import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UIChart } from "primeng/primeng";

const DEFAULT_COLORS = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
'#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E',
'#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC',
'#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC']

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChartComponent implements OnInit {

  chartOptions = {
    title: {
      display: true,
      text: 'Move Summary'
    },
    legend: {
      display: false,
      position: 'right'
    },
  };
  constructor() { }

  ngOnInit() {
   
  }
  chartObject = [
    { key: 'Pending', value: 8 },
    { key: 'Completed', value: 16 },
    { key: 'In-progress', value: 24 },
  ]
  chartLabels = this.chartObject.map((data) => data.key);
  chartData = this.chartObject.map((data) => data.value);
  chartColors = this.configureDefaultColours(this.chartData);
  
  reportChartData = {
    labels: this.chartLabels,
    datasets: [
      {
        data: this.chartData,
        backgroundColor: this.chartColors
      }
    ]
  } 

  
  private configureDefaultColours(data: number[]): string[] {
    let customColours = []
    if (data.length) {

      customColours = data.map((element, idx) => {
        return DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
      });
    }

    return customColours;
  } 

}
