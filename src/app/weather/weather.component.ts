import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city!: string;
  weatherData: any;
  errorMessage: string = '';
  isLoading: boolean = false; 

  // subscription: Subscription | undefined;

  constructor(private weatherService: WeatherService) { }


  ngOnInit() { }
  selectedDate: string = '';

  showWeatherDetails(date: string) {
    this.selectedDate = this.selectedDate === date ? '' : date;
  }

  getWeather() {
    this.isLoading = true;
    this.errorMessage = '';
    this.weatherData = null;
    if (!this.city) {
      this.errorMessage = 'Please enter the city name';
      this.isLoading = false; 
      return;
    }
    this.weatherService.getWeather(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        this.errorMessage = '';
        this.isLoading = false; 
      },
      (error) => {
        if (error.status === 404) {
          this.errorMessage = 'City not found';
          this.weatherData = null;
        } else {
          this.errorMessage = 'Enter the correct city name';
          this.weatherData = null;
        }
        this.isLoading = false; 
      }
    );
  }


}
