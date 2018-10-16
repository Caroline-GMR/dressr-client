import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-item-details-page',
  templateUrl: './item-details-page.component.html',
  styleUrls: ['./item-details-page.component.scss']
})
export class ItemDetailsPageComponent implements OnInit {
  error = null;
  item = {
    picture: ""
  };

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute

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

}
