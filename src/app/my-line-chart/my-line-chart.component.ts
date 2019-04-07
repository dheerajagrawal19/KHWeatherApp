import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { WeatherData } from '../weatherData';
import { ChartUpdaterService } from '../chart-updater.service';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent implements OnInit {

  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(255,0,255,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Weather Data' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  constructor(private chartUpdaterService: ChartUpdaterService) { }

  ngOnInit() {
    if (this.chartUpdaterService.subsVar == undefined) {
      this.chartUpdaterService.subsVar = this.chartUpdaterService.
        invokeChartUpdateFunction.subscribe((data: WeatherData[]) => {
          this.setlineChartData(data);
        });
    }
  }

  setlineChartData(list: WeatherData[]) {
    console.log(list);
    function getLabel(obj: WeatherData): string {
      return "" + obj.year + "'" + obj.month;
    }

    this.lineChartData[0]["data"] = []
    this.lineChartLabels = []
    list.forEach(element => {
      this.lineChartData[0]["data"].push(element.value);
      this.lineChartLabels.push(getLabel(element));
    });

    console.log(this.lineChartData)
    console.log(this.lineChartLabels)
  }
}
