import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogRestApiService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization' : 'Basic dG9uaWFnYXJhOldvb2xhbmNlITg='
    })
  }

  //Blog Posts
  allPosts(data: any) {
    let url_string = '?posts_per_page='+data.posts_per_page+'&page='+data.page+'&orderby='+data.orderby+'&order='+data.order;
    let url = environment.apiUrl + "/wp-all-posts.php" + url_string;
    console.log(url);
    return this.http.get(url, this.httpOptions);
  }

  singlePost(post_id: any) {
    let url_string = '?post_id='+post_id;
    let url = environment.apiUrl + "/wp-single-post.php" + url_string;
    console.log(url);
    return this.http.get(url, this.httpOptions);
  }
  //End Blog Post

  singleCategory(category: any) {
    let url_string = '?category='+category;
    let url = environment.apiUrl + "/wp-single-category.php" + url_string;
    console.log(url);
    return this.http.get(url, this.httpOptions);
  }

  toursByCategory(data: any) {
    let url_string = '?posts_per_page='+data.posts_per_page+ '&category='+data.category+'&page='+data.page+'&orderby='+data.orderby+'&order='+data.order;
    let url = environment.apiUrl + "/wp-all-tours.php" + url_string;
    console.log(url);
    return this.http.get(url, this.httpOptions);
  }

  homeCats() {
    let url = environment.apiUrl + "/wp-home-category.php";
    console.log(url);
    return this.http.get(url, this.httpOptions);
  }

  privateTourCats() {
    let url = environment.apiUrl + "/wp-private-tour-category.php";
    console.log(url);
    return this.http.get(url, this.httpOptions);
  }
  // allPosts(data: any) {
  //   let url = "https://www.toniagara.com/blog/wp-json/wp/v2/posts";
  //   return this.http.post(url, data, this.httpOptions);
  // }
}