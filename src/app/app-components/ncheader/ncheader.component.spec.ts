import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcheaderComponent } from './ncheader.component';

describe('NcheaderComponent', () => {
  let component: NcheaderComponent;
  let fixture: ComponentFixture<NcheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
