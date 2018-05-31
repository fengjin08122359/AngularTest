import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelDataStatisticsComponent } from './channel-data-statistics.component';

describe('ChannelDataStatisticsComponent', () => {
  let component: ChannelDataStatisticsComponent;
  let fixture: ComponentFixture<ChannelDataStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelDataStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelDataStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
