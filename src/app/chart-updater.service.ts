import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { WeatherData } from './weatherData';

@Injectable({
  providedIn: 'root'
})
export class ChartUpdaterService {

  invokeChartUpdateFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onChartUpdateEvent(n_data: WeatherData[]) {
    this.invokeChartUpdateFunction.emit(n_data);
  }
}