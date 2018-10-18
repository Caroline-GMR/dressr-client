import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class OutfitPreviewService {
  private outfit: any = {};
  private API_URL = environment.apiUrl + '/outfit';


  constructor(private httpClient: HttpClient) { }
  
  setOne(item: any) {
    if (item.category === 'tops') this.outfit.tops = item;
    if (item.category === 'bottoms') this.outfit.bottoms = item;
    if (item.category === 'footwear') this.outfit.footwear = item;
    return this.outfit;
  }
  
  getOutfit() {
    return this.outfit;
  }

  saveOutfit(data: any) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(this.API_URL, data, options)
      .toPromise()
  }

}