import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { WeatherData } from './weatherData';

@Injectable({
  providedIn: 'root'
})
export class RangeEmitterService {

  invokeRangeSetFunction = new EventEmitter();
  subsVar: Subscription;

  constructor() { }

  onRangeSetupEvent(data: WeatherData[]) {
    this.invokeRangeSetFunction.emit(data);
  }
}
