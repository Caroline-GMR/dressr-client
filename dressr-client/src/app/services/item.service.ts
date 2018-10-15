import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:3000/item';
  private item: any;

  constructor( private httpClient: HttpClient) { }

  getAll() {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(this.baseUrl, options)
      .toPromise();
  }

  submitItem(data) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(this.baseUrl, data, options)
    .toPromise();
  }

  getOne(id: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/${id}`, options)
      .toPromise();
  }
  getItem(): any {
    return this.item;
  }

}