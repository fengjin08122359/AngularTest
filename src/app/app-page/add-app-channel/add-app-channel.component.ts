import { Component, OnInit } from '@angular/core';
import { ChannelDataService } from '../../app-service/channel-data/channel-data.service';
import { ChannelJumpService } from '../../app-service/channel-jump/channel-jump.service';
import { Channel }      from '../../app-class/Channel';
import { CHANNELOPTIONS } from '../../app-service/channel-data/mock-channel-options';

@Component({
  selector: 'app-add-app-channel',
  templateUrl: './add-app-channel.component.html',
  styleUrls: ['./add-app-channel.component.css'],
  providers: [ChannelDataService,ChannelJumpService]
})
export class AddAppChannelComponent implements OnInit {
  channelOptions = CHANNELOPTIONS
  channel = {
  }
  constructor(
    private channelDataService: ChannelDataService,
    private channelJumpService: ChannelJumpService
  ) { }
  
  ngOnInit() {
    this.channel = this.channelDataService.getData().then(channel => {
      this.channel = channel;
    });
  }
  channelTypeChange (channel: Channel):void{
    this.channelJumpService.jumpSetting(channel)
  }

}
