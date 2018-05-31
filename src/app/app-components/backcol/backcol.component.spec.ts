import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackcolComponent } from './backcol.component';

describe('BackcolComponent', () => {
  let component: BackcolComponent;
  let fixture: ComponentFixture<BackcolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackcolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackcolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
