import { TestBed } from '@angular/core/testing';

import { BlogRestApiService } from './blog-rest-api.service';

describe('BlogRestApiService', () => {
  let service: BlogRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
