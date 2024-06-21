import { TestBed } from '@angular/core/testing';

import { SearchToursApiService } from './search-tours-api.service';

describe('SearchToursApiService', () => {
  let service: SearchToursApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchToursApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
