import { Component, OnInit } from '@angular/core';
import { RangeEmitterService } from '../range-emitter.service';
import { WeatherData } from '../weatherData';

@Component({
  selector: 'app-kh-date-picker',
  templateUrl: './kh-date-picker.component.html',
  styleUrls: ['./kh-date-picker.component.css']
})
export class KhDatePickerComponent implements OnInit {
  startMonth: String = ""
  endMonth: String = ""
  startYear: String = ""
  endYear: String = ""

  constructor(private rangeEmitterService: RangeEmitterService) { }

  ngOnInit() {
    if (this.rangeEmitterService.subsVar == undefined) {
      this.rangeEmitterService.subsVar = this.rangeEmitterService.
        invokeFirstComponentFunction.subscribe((data: WeatherData[]) => {
          this.setInitialValues(data);
        });
    }
  }

  setInitialValues(data: WeatherData[]) {
    console.log(data);
    this.startMonth = '' + 5 //data[0].month;
    this.startYear = '' + data[0].year;
    var ln = data.length
    this.endMonth = '' + data[ln - 1].month;
    this.endYear = '' + data[ln - 1].year;
  }

  onStartTimeChange(val: any) {
    this.startMonth = val;
    this.udpateChart();
  }
  onStartYearChange(val: any) {
    this.startYear = val;
    this.udpateChart();
  }
  onEndTimeChange(val: any) {
    this.endMonth = val;
    this.udpateChart();
  }
  onYearEndChange(val: any) {
    this.endYear = val;
    this.udpateChart();
  }

  udpateChart() {

  }
}
