import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

import { ItemService } from '../../services/item.service';
import { AuthService } from '../../services/auth.service';
import { formatNumber } from '../../../../node_modules/@angular/common';



@Component({
  selector: 'app-add-item-page',
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.scss']
})
export class AddItemPageComponent implements OnInit {
  isTop = true;
  isBottom = false;
  isFootwear = false;

  uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/item'
  });

  feedbackEnabled = false;
  error = null;
  processing = false;
  name: '';
  feedback: string;
  items: any;
  picture: string;
  category: any;
  subcategory: string;
  style: string;
  top: string;

  constructor(
    private itemService: ItemService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.itemService.getOne(params.id)
        .then((result) => {
          this.items = result;
          console.log(result)
        })
        .catch((error) => {
          console.log(error);
          this.error = true;
        })
    })

    this.uploader.onSuccessItem = (item, response) => {
      this.itemService.getAll()
      .then((results) => {
        this.items = results;
      });
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  setCategoryTop(event) {
    this.isTop = true;
    this.isBottom = false;
    this.isFootwear = false;

    if(this.isTop){
      this.category = "tops"
    }

  } 

  setCategoryBottom() {
    this.isTop = false;
    this.isBottom = true;
    this.isFootwear = false;


    if(this.isBottom){
      this.category = "bottoms"
    }
  } 

  setCategoryFootwear() {
    this.isTop = false;
    this.isBottom = false;
    this.isFootwear = true;


    if(this.isFootwear){
      this.category = "footwear"
    }

  } 

  submitForm(form) {
    console.log(this.category);
    console.log(form.value);
    // const input = req.body.input;
    // if (input === 'casual' || 'formal' || 'sports' || 'party' || 'beach' || 'lazy') {
    //   this.input = this.style;
    // };
    if (form.valid) {
      this.uploader.onBuildItemForm = (item, form2) => {
        form2.append('category', this.category);
        const data = {
          picture: this.picture,
          category: this.category,
          subcategory: this.subcategory,
          style: this.style
        };
        console.log(form);
        console.log(this.category)
        this.itemService.submitItem(data)
        .then(() => {
          this.router.navigate(['/clothes/:id']);
        })
        .catch((err) => {
          this.error = err.error.code || 'unexpected'; // :-)
          this.processing = false;
          this.feedbackEnabled = false;
        });
      }
      this.uploader.uploadAll();
    }
  }
}