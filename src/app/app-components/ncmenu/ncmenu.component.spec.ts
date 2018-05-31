import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcmenuComponent } from './ncmenu.component';

describe('NcmenuComponent', () => {
  let component: NcmenuComponent;
  let fixture: ComponentFixture<NcmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
