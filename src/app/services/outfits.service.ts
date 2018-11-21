import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OutfitsService {
  // private user: any;
  // private outfit: any = {};
  private API_URL = environment.apiUrl + '/outfit';

  constructor(private httpClient: HttpClient) { }

  // private setUser(user?: any) {
  //   this.user = user;
  //   return user;
  // }

  getAll() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(this.API_URL, options)
      .toPromise();
  }
  
  getOne(id: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/${id}`, options)
      .toPromise();
  }

}

