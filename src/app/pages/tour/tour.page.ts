import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourRestApiService } from 'src/app/services/tour-rest-api.service';
import { environment } from 'src/environments/environment';
import { IonContent } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.page.html',
  styleUrls: ['./tour.page.scss'],
})
export class TourPage implements OnInit {

  @ViewChild(IonContent) content:any = IonContent;

  public slug!: string;
  private activatedRoute = inject(ActivatedRoute);
  public logo: string = environment.logo;
  public image1: string = environment.image1;
  public image2: string = environment.image2;
  public image3: string = environment.image3;
  public image4: string = environment.image4;
  public home_link = "/home";
  public p: any = [];
  public reviews: any = [];
  public reviewPageN = 0;
  public gallery: any = [];
  public galleryPageN = 0;
  public isLoad: boolean = false;
  public isLoadR: boolean = false;
  public isLoadG: boolean = false;
  public isInfiniteR: boolean = false;
  public isInfiniteG: boolean = false;

  constructor( private service: TourRestApiService) { }

  ngOnInit() {
    let slug = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.service.singleTour( slug ).subscribe({
      next:(result:any) => {
        console.log( result );
        this.p = result;
        this.isLoad = true;
        this.getReviews( {'tour_id':result.detail.ID, 'page':1} );
        this.getGallery( {'tour_id':result.detail.ID, 'page':1} );
      },
      error:(err) => {
        console.log( err );
      },
    })
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }

  onIonInfiniteReviews(ev:any, tour_id:number) {
    this.reviewPageN = this.reviewPageN + 1;
    let params = {'tour_id':tour_id, 'page':this.reviewPageN}
    this.getReviews( params );
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
  handleReview(tour_id:number) {
    this.reviewPageN = this.reviewPageN + 1;
    let params = {'tour_id':tour_id, 'page':this.reviewPageN}
    this.getReviews( params );
    const element = document.querySelector('#reviews');
    if (element != null) {
      setTimeout(()=> element.scrollIntoView({ block:'start', behavior: 'smooth' }) , 500);
    }
  }
  getReviews( data:any ) { 
    let params = {
      per_page: 15,
      page: data.page, 
      tour_id: data.tour_id,
    };
    this.isInfiniteR = false;
    this.service.tourReviews( params ).subscribe({
      next:(result:any) => {
        if(result) {
          this.isInfiniteR = true;
          this.reviews.push(result);
          console.log( this.reviews );
          this.isLoadR = true;
        }
      },
      error:(err) => {
        console.log( err );
      },
    })
  }

  onIonInfiniteGallery(ev:any, tour_id:number) {
    this.galleryPageN = this.galleryPageN + 1;
    let params = {'tour_id':tour_id, 'page':this.galleryPageN}
    this.getGallery( params );
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
  handleGallery(tour_id:number) {
    this.galleryPageN = this.galleryPageN + 1;
    let params = {'tour_id':tour_id, 'page':this.galleryPageN}
    this.getGallery( params );
    const element = document.querySelector('#gallery');
    if (element != null) {
      setTimeout(()=> element.scrollIntoView({ block:'start', behavior: 'smooth' }) , 500);
    }
  }
  getGallery( data:any ) { 
    console.log(data);
    let params = {
      per_page: 15,
      page: data.page, 
      tour_id: data.tour_id,
    };
    this.isInfiniteG = false;
    this.service.tourGallery( params ).subscribe({
      next:(result:any) => {
        if(result) {
          this.isInfiniteG = true;
          this.gallery.push(result);
          this.isLoadG = true;
          console.log( this.gallery );
        }
      },
      error:(err) => {
        console.log( err );
      },
    })
  }

}
