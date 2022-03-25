import { Component, Injectable, OnInit } from '@angular/core';

export class Weather {
  temperature!: string;
  description!: string;
}

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor() { }

  public saveWeather(weather: Weather) {
    console.log(`Temperature: ${weather.temperature} - Description: ${weather.description}`);
  }

}

@Component({
  selector: 'app-weather',
  template: `<div>
    <form (ngSubmit)="onSubmit()">
      <label>Descrtiption
        <input type="text" [(ngModel)]="weather.description" name="description">
      </label>
      <label>Temperature
        <input type="text" [(ngModel)]="weather.temperature" name="temperature">
      </label>
      <button type="submit">Submit </button>
    </form>
  </div>`
})
export class WeatherComponent implements OnInit {

  weather!: Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weather = new Weather();
    this.weather.temperature="";
    this.weather.description="";
  }

  onSubmit() {
    this.weatherService.saveWeather(this.weather);
  }

}
