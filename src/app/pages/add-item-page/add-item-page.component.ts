import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import {Location} from '@angular/common'


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
  localUrl: Array<any>;
  preview = false;

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
    private route: ActivatedRoute,
    private _location: Location

  ) {}

  ngOnInit() {
    this.uploader.onSuccessItem = (item, response) => {
      this.itemService.getAll()
      .then((results) => {
        this.items = results;
      })
      .catch(error => console.log(error))
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

  handleFileUpload(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.localUrl = event.target.result;
      }
      this.preview = true;
      reader.readAsDataURL(event.target.files[0]);

    }
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid && this.preview) {
      this.uploader.onBuildItemForm = (item, form2) => {
        form2.append('category', this.category);
        form2.append('subcategory', this.subcategory);
        form2.append('style', this.style);
      }
      this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
        this.item = JSON.parse(response)
        this.router.navigate(['/clothes', this.item._id]);
      }; 
      this.uploader.uploadAll();
      this.processing = true;
    }
  }

  backClicked() {
    this._location.back();
  }
}