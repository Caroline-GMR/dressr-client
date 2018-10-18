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
  feedbackEnabled = false;
  processing = false;
  style:any;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location,
    private outfitPreview: OutfitPreviewService

  ) { }

  ngOnInit() {
    this.outfit = this.outfitPreview.getOutfit();

    if (!this.outfit.tops || !this.outfit.bottoms || !this.outfit.footwear) {
      this.router.navigate(['/closet']);
    }
  }

  showDetail(id) {
    console.log(id);
    this.router.navigate(['/clothes', id]);
  }

  backClicked() {
    this._location.back();
  }

  submitOutfit(style:any) {
    this.error = '';
    this.feedbackEnabled = true;
    this.outfit.style = style;
    if (this.outfit.style && this.outfit) {
      this.processing = true;
      this.outfitPreview.saveOutfit(this.outfit)
        .then((outfit: any) => {
          this.outfitPreview.clear();
          this.router.navigate(['/outfit', outfit._id]);
        })
        .catch((err) => {
          this.error = err.message|| 'unexpected'; // :-)
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}
