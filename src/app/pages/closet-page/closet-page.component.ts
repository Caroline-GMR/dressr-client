import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-closet-page',
  templateUrl: './closet-page.component.html',
  styleUrls: ['./closet-page.component.scss']
})
export class ClosetPageComponent implements OnInit {
  items: any;
  config: any;

  constructor(
    private itemService: ItemService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.itemService.getAll()
    .then((results: Array<any>) => {
      this.items = results;
    })
  }

  showDetail(id) {
    console.log(id);
    this.router.navigate(['/clothes', id]);
  }
}
