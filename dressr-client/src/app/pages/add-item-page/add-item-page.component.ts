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
  item: any;

  constructor(
    private itemService: ItemService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
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
    if (form.valid) {
      this.uploader.onBuildItemForm = (item, form2) => {
        form2.append('category', this.category);
        form2.append('subcategory', this.subcategory);
        form2.append('style', this.style);
        // const data = {
        //   category: this.category,
        //   subcategory: this.subcategory,
        //   style: this.style
        // };
        // this.itemService.submitItem(data)
        // .then((result) => {
        //   console.log(result);
        //   this.item = result;
        //   this.router.navigate(['/clothes', this.item._id]);
        // })
        // .catch((err) => {
        //   this.error = err.error.code || 'unexpected'; // :-)
        //   this.processing = false;
        //   this.feedbackEnabled = false;
        // });
      }
      this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
        this.item = JSON.parse(response);
        this.router.navigate(['/clothes', this.item._id]);
    };
      this.uploader.uploadAll();
    }
  }
}