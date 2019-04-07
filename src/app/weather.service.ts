import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { WeatherData } from './weatherData';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseurl = "https://s3.eu-west-2.amazonaws.com/interview-question-data/metoffice/";

  constructor(private _http: HttpClient) { }

  getWeatherData(metric: String, location: String): Observable<WeatherData[]> {
    var url_path = this.baseurl + metric + "-" + location + ".json";
    return this._http.get<WeatherData[]>(url_path);
  }

  getWeatherData2(metric: String, location: String) {
    var url_path = this.baseurl + metric + "-" + location + ".json";
    console.log(url_path);
    return this._http.get(url_path);
  }

}
