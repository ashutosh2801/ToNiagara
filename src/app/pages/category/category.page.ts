import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogRestApiService } from 'src/app/services/blog-rest-api.service';
import { environment } from 'src/environments/environment';
import { SearchToursApiService } from 'src/app/services/search-tours-api.service';
import { IonContent } from '@ionic/angular';
import { TourPage } from '../tour/tour.page';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  component = TourPage;
  @ViewChild(IonContent) content:any = IonContent;

  public category!: string;
  private activatedRoute = inject(ActivatedRoute);
  public logo: string = environment.logo;
  public image1: string = environment.image1;
  public image2: string = environment.image2;
  public image3: string = environment.image3;
  public image4: string = environment.image4;
  public home_link = "/home";
  public p: any = [];
  public item_list: any = [];
  public isLoad = true;
  public isLoadNum = Array(5);
  public searchTerm : any="";
  public jsonData : any;
  public total_item = 0;

  constructor(private service: BlogRestApiService, public data : SearchToursApiService) { }

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('id') as string;   
    let params = {
      per_page: 10,
      category: this.category,
      page: 1, 
      //offset: offset,
      orderby: 'date',
      order: 'DESC',
    }; 
    this.loadCategory( params );
  }

  sortByChange( e: any) {
    let orderby = e.target.value;
    let params = {
      per_page: 10,
      category: this.category,
      page: 1, 
      orderby: orderby,
    };
    this.loadCategory( params );
  }


  loadCategory( params:any ) {
    this.isLoad = true;
    this.service.toursByCategory( params ).subscribe({
      next: (result:any) => {
        console.log(result);
        this.p = result.category;
        this.item_list = result.tours;
        this.total_item =  result.tours.length;
        this.isLoad = false;
      },
      error: (err:any) => {
        console.log(err);
      } 
    });
  }

  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.content.scrollToTop(500);
  }

  public data1 = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  public results = [...this.data1];
  public isSearch: boolean = false;

  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    console.log(query);
    if(query) {
      this.results = this.data1.filter((d) => d.toLowerCase().indexOf(query) > -1);
      this.isSearch = true;
    }
    else {
      this.isSearch = false;
    }
  }

  

}
