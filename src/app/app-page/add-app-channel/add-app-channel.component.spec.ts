import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppChannelComponent } from './add-app-channel.component';

describe('AddAppChannelComponent', () => {
  let component: AddAppChannelComponent;
  let fixture: ComponentFixture<AddAppChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
