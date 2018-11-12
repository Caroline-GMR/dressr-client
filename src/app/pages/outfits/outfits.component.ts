import { Component, OnInit } from '@angular/core';
import { OutfitsService } from '../../services/outfits.service';
import {Location} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-outfits',
  templateUrl: './outfits.component.html',
  styleUrls: ['./outfits.component.scss']
})
export class OutfitsComponent implements OnInit {

  outfits: any;

  constructor(
    private _location: Location,
    private outfitsService: OutfitsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.outfitsService.getAll()
      .then((result) => {
        this.outfits = result;
      })
      .catch((error) => {
        console.log(error);
      })
  }

  backClicked() {
    this.router.navigate(['/profile']);
  }
}
