import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TourGalleryPage } from './tour-gallery.page';

describe('TourGalleryPage', () => {
  let component: TourGalleryPage;
  let fixture: ComponentFixture<TourGalleryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TourGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
