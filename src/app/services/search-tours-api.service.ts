import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchToursApiService {

  jsonData: any;
 
    constructor() {
 
        this.jsonData=[
      {"id":1,"label":"saw","name":"Prithivi"},
      {"id":2,"label":"saw1","name":"Abimanyu"},
      {"id":3,"label":"saw2","name":"malliga"},
      {"id":3,"label":"saw2","name":"Gowdaman"},
      {"id":3,"label":"saw2","name":"Neethi"},
      {"id":3,"label":"saw2","name":"abirami1"},
      {"id":3,"label":"saw2","name":"abirami2"},
      {"id":3,"label":"saw2","name":"Harrish"},
      {"id":3,"label":"saw2","name":"Lokesh"},
      {"id":3,"label":"saw2","name":"Deepak"},
      {"id":3,"label":"saw2","name":"malliga"},
      {"id":3,"label":"saw2","name":"malliga"}

      ];
 
    }
 
    filterItems(searchTerm:any){
 
       return this.jsonData.filter((item:any) => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        });  
 
    }
}
