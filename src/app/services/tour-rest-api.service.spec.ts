import { TestBed } from '@angular/core/testing';

import { TourRestApiService } from './tour-rest-api.service';

describe('TourRestApiService', () => {
  let service: TourRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
