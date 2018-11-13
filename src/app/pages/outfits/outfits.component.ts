import { Component, OnInit } from '@angular/core';
import { OutfitsService } from '../../services/outfits.service';
import {Location} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-outfits',
  templateUrl: './outfits.component.html',
  styleUrls: ['./outfits.component.scss']
})
export class OutfitsComponent implements OnInit {

  outfits: any;
  tops: any;
  bottoms: any;
  footwear: any;

  public config: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
  };

  constructor(
    private _location: Location,
    private outfitsService: OutfitsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.outfitsService.getAll()
    .then((result: Array<any>) => {
      this.outfits = result.slice(10, result.length -1);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  backClicked() {
    this.router.navigate(['/profile']);
  }
}
