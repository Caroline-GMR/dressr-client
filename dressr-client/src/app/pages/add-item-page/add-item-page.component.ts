import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

import { ItemService } from '../../services/item.service';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-add-item-page',
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.scss']
})
export class AddItemPageComponent implements OnInit {

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
  description: string;
  style: string;

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

  submitForm(form) {
    if (form.valid) {
      this.uploader.onBuildItemForm = (item, form2) => {
        form2.append('category', this.category);
        const data = {
          picture: this.picture,
          category: this.category,
          description: this.description,
          style: this.style
        };
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