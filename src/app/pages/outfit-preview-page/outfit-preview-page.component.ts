import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Location} from '@angular/common'
import { OutfitPreviewService } from '../../services/outfit-preview.service';

@Component({
  selector: 'app-outfit-preview-page',
  templateUrl: './outfit-preview-page.component.html',
  styleUrls: ['./outfit-preview-page.component.scss']
})
export class OutfitPreviewPageComponent implements OnInit {
  error = null;
  item:any;
  outfit:any;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location,
    private outfitPreview: OutfitPreviewService

  ) { }

  ngOnInit() {
    this.outfit = this.outfitPreview.getOutfit();
    console.log(this.outfit)
  }

  showDetail(id) {
    console.log(id);
    this.router.navigate(['/clothes', id]);
  }

  backClicked() {
    this._location.back();
  }

}
