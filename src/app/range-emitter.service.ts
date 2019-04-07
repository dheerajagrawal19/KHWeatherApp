import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { WeatherData } from './weatherData';

@Injectable({
  providedIn: 'root'
})
export class RangeEmitterService {

  invokeFirstComponentFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onFirstComponentButtonClick(data: WeatherData[]) {
    this.invokeFirstComponentFunction.emit(data);
  }
}
