import { Component, OnInit } from '@angular/core';
import { ChannelConfigService } from '../../app-service/channel-config/channel-config.service';
import { ChannelJumpService } from '../../app-service/channel-jump/channel-jump.service';
import { Channel }      from '../../app-class/Channel';

@Component({
  selector: 'app-set-config',
  templateUrl: './set-config.component.html',
  styleUrls: ['./set-config.component.css'],
  providers: [ChannelConfigService,ChannelJumpService]
})
export class SetConfigComponent implements OnInit {

  constructor(
    private channelConfigService: ChannelConfigService,
    private channelJumpService: ChannelJumpService
  ) { }

  ngOnInit() {
  }

}
