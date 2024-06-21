import { Component, OnInit } from '@angular/core';
import { BlogRestApiService } from 'src/app/services/blog-rest-api.service';
import { environment } from 'src/environments/environment';

import { CategoryPage } from '../category/category.page';
import { PrivateToursPage } from '../private-tours/private-tours.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  component = CategoryPage;
  component2 = PrivateToursPage;

  public logo: string = environment.logo;
  public image1: string = environment.image1;
  public image2: string = environment.image2;
  public image3: string = environment.image3;
  public image4: string = environment.image4;
  public home_link = "/home";
  public item_list: any = [];
  public isLoad: boolean = true;

  constructor(private service: BlogRestApiService) { }

  ngOnInit() {
    this.service.homeCats().subscribe({
      next:(result) => {
        console.log(result);
        this.item_list = result;
        this.isLoad = false;
      },
      error:(err) => {
        console.log(err.status);
      },
    });
  }

}
