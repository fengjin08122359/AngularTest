import { TestBed, inject } from '@angular/core/testing';

import { ChannelConfigService } from './channel-config.service';

describe('ChannelConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChannelConfigService]
    });
  });

  it('should be created', inject([ChannelConfigService], (service: ChannelConfigService) => {
    expect(service).toBeTruthy();
  }));
});
