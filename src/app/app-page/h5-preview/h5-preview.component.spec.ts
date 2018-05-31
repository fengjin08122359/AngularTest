import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H5PreviewComponent } from './h5-preview.component';

describe('H5PreviewComponent', () => {
  let component: H5PreviewComponent;
  let fixture: ComponentFixture<H5PreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H5PreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H5PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
