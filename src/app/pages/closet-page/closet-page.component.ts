import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-closet-page',
  templateUrl: './closet-page.component.html',
  styleUrls: ['./closet-page.component.scss']
})
export class ClosetPageComponent implements OnInit {
  items: any;

  constructor(
    private itemService: ItemService
  ) { }
  
  ngOnInit() {
    this.itemService.getAll()
    .then((results: Array<any>) => {
      console.log(results.length)
      this.items = results;

      // for(let ix=0; ix < results.length; ix++) {
      //   if (results[ix].category === 'tops') this.items.push(results[ix])   
      //   if (results[ix].category === 'bottoms') this.items.push(results[ix])
      //   if (results[ix].category === 'footwear') this.items.push(results[ix])
      // }
      console.log(this.items);
    })
  }
}
