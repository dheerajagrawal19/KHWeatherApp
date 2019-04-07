import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherData } from './weatherData';
import { RangeEmitterService } from './range-emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Weather-app';
  selectedPlace: String = "UK";
  selectedMetric: String = "Tmax";
  w_data: WeatherData[] = []

  constructor(private weatherService: WeatherService, private rangeEmitterService: RangeEmitterService) { }

  updateData() {
    var data = this.weatherService.getWeatherData(this.selectedMetric, this.selectedPlace);
    data.subscribe(d => {
      this.w_data = d
      this.rangeEmitterService.onFirstComponentButtonClick(this.w_data);
    });
  }

  placeChanged(placeValue: String) {
    this.selectedPlace = placeValue;
    this.updateData();
  }

  metricChanged(metricValue: String) {
    this.selectedMetric = metricValue;
    this.updateData();
  }
}


