import { Component, OnInit } from '@angular/core';
//import { last } from '../../../../node_modules/@angular/router/src/utils/collection';
import { WeatherService } from '../../services/weather.service';

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {
  
  feedbackEnabled = false;
  error = null;
  processing = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    const promise = new Promise((resolve, reject) => {
      resolve(this.getCurrentLocation)
    });
    
    promise.then((value) => {
      // CALL THE SERVICE
      this.weatherService.getWeather(value[0], value[1])
    });

  }

  getCurrentLocation() {
    function success(pos) {
      var crd = pos.coords;
       return [crd.latitude, crd.longitude]
    
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);

  }
  
}
