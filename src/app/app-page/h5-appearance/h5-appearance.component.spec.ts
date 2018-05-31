import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H5AppearanceComponent } from './h5-appearance.component';

describe('H5AppearanceComponent', () => {
  let component: H5AppearanceComponent;
  let fixture: ComponentFixture<H5AppearanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H5AppearanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H5AppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
