import { TestBed, inject } from '@angular/core/testing';

import { ChannelJumpService } from './channel-jump.service';

describe('ChannelJumpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChannelJumpService]
    });
  });

  it('should be created', inject([ChannelJumpService], (service: ChannelJumpService) => {
    expect(service).toBeTruthy();
  }));
});
