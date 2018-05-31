import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcAppearanceComponent } from './pc-appearance.component';

describe('PcAppearanceComponent', () => {
  let component: PcAppearanceComponent;
  let fixture: ComponentFixture<PcAppearanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcAppearanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
