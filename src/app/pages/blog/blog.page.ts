import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { BlogRestApiService } from 'src/app/services/blog-rest-api.service';
import { environment } from 'src/environments/environment';

import { BlogDetailPage  } from '../blog-detail/blog-detail.page';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  component = BlogDetailPage;

  public logo: string = environment.logo;
  public image1: string = environment.image1;
  public image2: string = environment.image2;
  public image3: string = environment.image3;
  public image4: string = environment.image4;
  public home_link = "/home";  

  public item_list: any = []; 
  public i: number = 1;
  public numbers:any;
  public isLoad:boolean = true;
    
  constructor(private service: BlogRestApiService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.numbers = Array(10).fill(0).map((x,i)=>i);
    this.generateItems(this.i);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000,
      spinner: 'bubbles'
    });
    await loading.present();
  }

  private generateItems(page: number) {
    //this.presentLoading();
    let params = {
        per_page: 10,
        page: page, 
        //offset: offset,
        orderby: 'date',
        order: 'DESC',
    };

    this.service.allPosts(params).subscribe({
      next: (result:any) => {
        console.log(result);
        this.item_list = [
          ...this.item_list,
          ...result,
        ];
        this.isLoad = false;
        //this.item_list = result;
        //this.loadingController.dismiss('');
      },
      error: (err) => { console.error(err) }
    });
  }

  onIonInfinite(ev:any) {
    //console.log( ev );
    this.isLoad = true;
    this.i = (this.i+1);
    console.log( this.i );
    this.generateItems(this.i);
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
