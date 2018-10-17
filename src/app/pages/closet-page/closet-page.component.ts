import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-closet-page',
  templateUrl: './closet-page.component.html',
  styleUrls: ['./closet-page.component.scss']
})
export class ClosetPageComponent implements OnInit {
  tops: Array<any>;
  bottoms: Array<any>;
  footwear: Array<any>;
  config: any;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private _location: Location

  ) { }
  
  ngOnInit() {
    this.itemService.getAll()
    .then((results: Array<any>) => {
      this.tops = results.filter((item) => item.category === 'tops')
      this.bottoms = results.filter((item) => item.category === 'bottoms')
      this.footwear = results.filter((item) => item.category === 'footwear')
    })
  }

  showDetail(id) {
    console.log(id);
    this.router.navigate(['/clothes', id]);
  }

  backClicked() {
    this._location.back();
  }
}