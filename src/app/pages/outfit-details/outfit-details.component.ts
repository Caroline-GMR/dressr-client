import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import {Location} from '@angular/common'
import { OutfitsService } from '../../services/outfits.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-outfit-details',
  templateUrl: './outfit-details.component.html',
  styleUrls: ['./outfit-details.component.scss']
})
export class OutfitDetailsComponent implements OnInit {

  outfit: any;

  constructor(
    private itemService: ItemService,
    private _location: Location,
    private outfitsService: OutfitsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.outfitsService.getOne(params.id)
        .then((result) => {
          this.outfit = result;
          console.log(this.outfit.tops.picture)
        })
        .catch((error) => {
          console.log(error);
        })
    })
  }

  backClicked() {
    this.router.navigate(['/profile']);
  }

}
