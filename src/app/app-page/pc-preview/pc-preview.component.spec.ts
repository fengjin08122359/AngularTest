import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcPreviewComponent } from './pc-preview.component';

describe('PcPreviewComponent', () => {
  let component: PcPreviewComponent;
  let fixture: ComponentFixture<PcPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
