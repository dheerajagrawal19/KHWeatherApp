import { Component, OnInit } from '@angular/core';
import { RangeEmitterService } from '../range-emitter.service';
import { WeatherData } from '../weatherData';
import { Month } from '../month';
import { ChartUpdaterService } from '../chart-updater.service';

@Component({
  selector: 'app-kh-date-picker',
  templateUrl: './kh-date-picker.component.html',
  styleUrls: ['./kh-date-picker.component.css']
})
export class KhDatePickerComponent implements OnInit {
  showDates: boolean = true;
  startMonth: string = ""
  endMonth: string = ""
  startYear: number = 1990
  endYear: number = 2019
  w_data: WeatherData[] = []

  constructor(private rangeEmitterService: RangeEmitterService, private chartUpdaterService: ChartUpdaterService) { }

  years: number[] = [];
  months: Month[] = [
    { val: '01', name: 'Jan' },
    { val: '02', name: 'Feb' },
    { val: '03', name: 'Mar' },
    { val: '04', name: 'Apr' },
    { val: '05', name: 'May' },
    { val: '06', name: 'Jun' },
    { val: '07', name: 'Jul' },
    { val: '08', name: 'Aug' },
    { val: '09', name: 'Sep' },
    { val: '10', name: 'Oct' },
    { val: '11', name: 'Nov' },
    { val: '12', name: 'Dec' }
  ];

  ngOnInit() {

    if (this.rangeEmitterService.subsVar == undefined) {
      this.rangeEmitterService.subsVar = this.rangeEmitterService.
        invokeRangeSetFunction.subscribe((data: WeatherData[]) => {
          this.setInitialValues(data);
        });
    }
  }

  setInitialValues(data: WeatherData[]) {
    let ln = data.length
    this.startMonth = '' + data[0].month;
    this.endMonth = '' + data[ln - 1].month;

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    var yrs = []
    for (var i = 0; i < ln; i++) {
      yrs.push(data[i].year);
    }
    this.years = yrs.filter(onlyUnique);

    this.startYear = this.years[0];
    this.endYear = this.years[this.years.length - 1];

    this.w_data = data;
    this.showDates = false;
  }

  onStartTimeChange(val: any) {
    console.log(val)
    if (val > this.endMonth && this.startYear == this.endYear) {
      alert("Not Allowed");
      this.startMonth = this.endMonth;
      return;
    }

    this.startMonth = val;
    this.udpateChart();
  }
  onStartYearChange(val: any) {
    if (val > this.endYear) {
      alert("Not Allowed");
      this.endYear = this.startYear;
      return;
    }
    this.startYear = val;
    this.udpateChart();
  }
  onEndTimeChange(val: any) {
    if (val < this.startMonth && this.startYear == this.endYear) {
      alert("Not Allowed");
      this.endMonth = this.startMonth;
      return;
    }

    this.endMonth = val;
    this.udpateChart();
  }
  onYearEndChange(val: any) {
    if (val < this.startYear) {
      alert("Not Allowed");
      this.startYear = this.endYear;
      return;
    }


    this.endYear = val;
    this.udpateChart();
  }

  udpateChart() {
    var n_data = this.w_data.filter((v, i, a) => {
      return (v.year >= this.startYear) && (v.year <= this.endYear);
    });

    this.chartUpdaterService.onChartUpdateEvent(n_data);
  }
}
