import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWebChannelComponent } from './add-web-channel.component';

describe('AddWebChannelComponent', () => {
  let component: AddWebChannelComponent;
  let fixture: ComponentFixture<AddWebChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWebChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWebChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
