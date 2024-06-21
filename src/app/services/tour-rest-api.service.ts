import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TourRestApiService {

  constructor( private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization' : 'Basic dG9uaWFnYXJhOldvb2xhbmNlITg='
    })
  }

  singleTour(slug: string) {
    let url_string = '?slug='+slug;
    let url = environment.apiUrl + "/wp-single-tour.php" + url_string;
    console.log(url);
    return this.http.get(url, this.httpOptions);
  }

  tourReviews(data:any) {
    let url_string = '?posts_per_page='+data.per_page+ '&tour_id='+data.tour_id+'&page='+data.page+'&orderby='+data.orderby;
    let url = environment.apiUrl + "/wp-tour-review.php" + url_string;
    console.log(url);
    return this.http.get(url, this.httpOptions);
  }

  tourGallery(data:any) {
    let url_string = '?posts_per_page='+data.per_page+ '&tour_id='+data.tour_id+'&page='+data.page+'&orderby='+data.orderby;
    let url = environment.apiUrl + "/wp-tour-gallery.php" + url_string;
    console.log(url);
    return this.http.get(url, this.httpOptions);
  }
}
