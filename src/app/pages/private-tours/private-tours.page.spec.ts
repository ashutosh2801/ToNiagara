import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivateToursPage } from './private-tours.page';

describe('PrivateToursPage', () => {
  let component: PrivateToursPage;
  let fixture: ComponentFixture<PrivateToursPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrivateToursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
