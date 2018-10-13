import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-add-item-page',
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.scss']
})
export class AddItemPageComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/item'
  });

  name: '';
  feedback: string;
  items: any;

  constructor(
    private itemService: ItemService,
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

  submitForm(form) {
    if (form.valid) {
      this.uploader.onBuildItemForm = (item, form2) => {
        form2.append('name', this.name);
      };
    }
    this.uploader.uploadAll();
  }
}

