import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TourReviewPage } from './tour-review.page';

describe('TourReviewPage', () => {
  let component: TourReviewPage;
  let fixture: ComponentFixture<TourReviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TourReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
