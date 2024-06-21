import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  public get(url: string) { 
    return this.http.get(environment.apiUrl +'/'+ url, this.httpHeader); 
  } 
  public post(url: string, data: any) { 
    console.log(environment.apiUrl +'/'+ url);
    return this.http.post(environment.apiUrl +'/'+ url, data, this.httpHeader);
  } 
  public put(url: string, data: any) { 
    return this.http.put(environment.apiUrl + url, data, this.httpHeader);
  } 
  public delete(url: string) { 
    return this.http.delete(environment.apiUrl + url, this.httpHeader);
  }
}
