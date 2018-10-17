import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OutfitPreviewService {
  private outfit: any = {};

  constructor() { }
  
  setOne(item: any) {
    if (item.category === 'tops') this.outfit.tops = item;
    if (item.category === 'bottoms') this.outfit.bottoms = item;
    if (item.category === 'footwear') this.outfit.footwear = item;
    return this.outfit;
  }
  
  getOutfit() {
    return this.outfit;
  }
}




