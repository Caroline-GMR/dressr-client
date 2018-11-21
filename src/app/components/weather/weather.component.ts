import { Component, OnInit } from '@angular/core';
//import { last } from '../../../../node_modules/@angular/router/src/utils/collection';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {
  weather;
  feedbackEnabled = false;
  error = null;
  processing = false;
  geolocationPosition;
  lat;
  lng;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
              this.geolocationPosition = position,
              this.lat = this.geolocationPosition.coords.latitude,
              this.lng = this.geolocationPosition.coords.longitude,
              this.weather = this.weatherService.getWeather(this.lat, this.lng);
                  console.log(position)
                  console.log(position.coords.latitude)
                  console.log(this.lng)
          },
          error => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
      );
    };

    
    // this.getCurrentLocation(this.lat, this.lng);
    
    // this.weatherService.getWeather(this.lat, this.lng)
    
    
    // const promise = new Promise((resolve, reject) => {
      //   resolve(this.getCurrentLocation)
      // });
      
      // promise.then((value) => {
        //   // CALL THE SERVICE
        //   this.results = this.weatherService.getWeather(value[0], value[1])
        //   console.log(value[0])
        // });
        
      }
      
    showWeather() {
      console.log(this.weather)
    }
  // getCurrentWeather() {
  //   this.results = this.weatherService.getWeather(this.lat, this.lng)
  //   console.log(this.results)
  // }
  // getCurrentLocation() {
  //   function success(pos) {
  //     var crd = pos.coords;
  //     return [crd.latitude, crd.longitude]
      
  //   }
    
  //   function error(err) {
  //     console.warn(`ERROR(${err.code}): ${err.message}`);
  //   }
    
  //   navigator.geolocation.getCurrentPosition(success, error, options);

  // }
  
}
