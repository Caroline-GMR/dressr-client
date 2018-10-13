import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:3000/item';

  constructor( private httpClient: HttpClient) { }

  getAll() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(this.baseUrl, options)
      .toPromise();
  }

  submitItem(item) {
    const options = {
      withCredentials: true
    };
    console.log(item)
    return this.httpClient.post(this.baseUrl, item, options)
    .toPromise();
  }

  getOne(id: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/${id}`, options)
      .toPromise();
  }
}