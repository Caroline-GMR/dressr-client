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

  submitOutfit(outfit, style) {
    this.error = '';
    this.feedbackEnabled = true;
    this.outfit.style = style;
    console.log(this.outfit.style);
    if (this.outfit.style && this.outfit) {
      this.processing = true;
      const data = {
        style: this.outfit.style,
        outfit: this.outfit
      };
      this.outfitPreview.saveOutfit(data)
        .then(() => {
          this.router.navigate(['/outfit', this.outfit._id]);
        })
        .catch((err) => {
          this.error = err.error.code || 'unexpected'; // :-)
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}
