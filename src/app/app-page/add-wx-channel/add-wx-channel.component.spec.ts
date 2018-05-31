import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWxChannelComponent } from './add-wx-channel.component';

describe('AddWxChannelComponent', () => {
  let component: AddWxChannelComponent;
  let fixture: ComponentFixture<AddWxChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWxChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWxChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
