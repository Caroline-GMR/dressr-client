import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import {Location} from '@angular/common'

@Component({
  selector: 'app-item-details-page',
  templateUrl: './item-details-page.component.html',
  styleUrls: ['./item-details-page.component.scss']
})
export class ItemDetailsPageComponent implements OnInit {
  error = null;
  item:any = {
    picture: "",
    category: null,
    subcategory: null,
    style: null
  };

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location

  ) { }
  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.itemService.getOne(params.id)
        .then((result) => {
          this.item = result;
        })
        .catch((error) => {
          console.log(error);
          this.error = true;
        })
    })
  }

  backClicked() {
    this._location.back();
  }
}
