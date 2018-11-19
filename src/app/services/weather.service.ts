import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weather: any = {};

  constructor(private httpClient: HttpClient) { }

  getWeather(lat, lng) {
    // Find hopw to get the current location (hint: try with the getCurrentLocation browser API)
    // form the ngOnInit method in the component call this service method, passing the lat and long
    // then in the component resolve the promise and do wathever you want with teh data
    return this.httpClient.get(`http://crossorigin.me/https://api.darksky.net/forecast/e5b395c762d79d7c9d230efa2f4b4c09/${lat},${lng}`)
      .toPromise();
  }
}
