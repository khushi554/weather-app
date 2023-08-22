import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiid = '2e9154d0712b4b8586b104214231808';

  constructor(private http:HttpClient) { }

  getWeather(city: string){
    return this.http.get(`http://api.weatherapi.com/v1/forecast.json?key=${this.apiid}&q=${city}&days=5&aqi=no`)
  }
}
