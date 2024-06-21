import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogRestApiService } from 'src/app/services/blog-rest-api.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.page.html',
  styleUrls: ['./blog-detail.page.scss'],
})
export class BlogDetailPage implements OnInit {

  public post!: string;
  private activatedRoute = inject(ActivatedRoute);
  public logo: string = environment.logo;
  public image1: string = environment.image1;
  public image2: string = environment.image2;
  public image3: string = environment.image3;
  public image4: string = environment.image4;
  public home_link = "/home";
  public maxBreadcrumbs: any = 4;
  public isLoad:boolean = true;
  public p: any = [];

  constructor(private service: BlogRestApiService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.post = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.service.singlePost(this.post).subscribe({
      next: (result:any) => {
        console.log(result);
        this.p = result;
        this.isLoad = false;
      },
      error: (err) => { console.error(err) }
    });
  }

  expandBreadcrumbs() {
    this.maxBreadcrumbs = 0;
  }

}
