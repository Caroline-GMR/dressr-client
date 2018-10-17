import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private API_URL = environment.apiUrl + '/item';
  private item: any;

  constructor( private httpClient: HttpClient) { }

  getAll() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(this.API_URL, options)
      .toPromise();
  }

  submitItem(data) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(this.API_URL, data, options)
    .toPromise();
  }

  getOne(id: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/${id}`, options)
      .toPromise();
  }
  
  getItem(): any {
    return this.item;
  }

}