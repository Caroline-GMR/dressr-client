import { Component, OnInit } from '@angular/core';
import { OutfitsService } from '../../services/outfits.service';
import {Location} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { SwiperModule, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { WeatherService } from '../../services/weather.service';


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
    slidesPerView: 3.5,
    spaceBetween: 10,
    freeMode: true,
  };

  constructor(
    private _location: Location,
    private outfitsService: OutfitsService,
    private route: ActivatedRoute,
    private router: Router,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.outfitsService.getAll()
    .then((result: Array<any>) => {
      this.outfits = result;
    })
    .catch((error) => {
      console.log(error);
    })
  }

  showDetail(id) {
    this.router.navigate(['/outfit', id]);
  }

  backClicked() {
    this.router.navigate(['/profile']);
  }
}
