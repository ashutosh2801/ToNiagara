import { Component, OnInit } from '@angular/core';
import { BlogRestApiService } from 'src/app/services/blog-rest-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-private-tours',
  templateUrl: './private-tours.page.html',
  styleUrls: ['./private-tours.page.scss'],
})
export class PrivateToursPage implements OnInit {

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
    this.service.privateTourCats().subscribe({
      next:(result) => {
        //console.log(result);
        this.item_list = result;
        this.isLoad = false;
      },
      error:(err) => {
        console.log(err);
      },
    });
  }

}
