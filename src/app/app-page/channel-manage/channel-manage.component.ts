import { Component, OnInit } from '@angular/core';
import { Channel }      from '../../app-class/Channel';
import { Router }    from '@angular/router';
import { ChannelDataService } from '../../app-service/channel-data/channel-data.service';
import { ChannelJumpService } from '../../app-service/channel-jump/channel-jump.service';

@Component({
  selector: 'app-channel-manage',
  templateUrl: './channel-manage.component.html',
  styleUrls: ['./channel-manage.component.css'],
  providers: [ChannelDataService,ChannelJumpService]
})
export class ChannelManageComponent implements OnInit {
  channelDatas = [{
        pk: '1',
        name: 'Any800',
        type: 'web',
        memo: '官网',
        monitor: '2',
        linkType: '2'
      },
      {
        pk: '2',
        name: '微信',
        type: 'wx',
        memo: '携程入口',
        publicNo: ''
      },
      {
        pk: '3',
        name: '别克APP',
        type: 'app',
        memo: 'SDK',
        appId: '123',
        appSecret: '333',
        sendType: '2',
        sendLink: 'http://www.baidu.com'
      }]
  constructor(
    private router: Router,
    private channelDataService: ChannelDataService,
    private channelJumpService: ChannelJumpService
  ) { }

  ngOnInit() {
  }
  addChannel (channel: Channel):void{
    this.channelDataService.setData(new Channel())
    this.channelJumpService.jumpSetting(channel);
  }
  clickAppearance (channel: Channel):void{
    console.log(channel)
    this.channelJumpService.jumpAppearance(channel);
  }
  clickConfig (channel: Channel):void{
    this.router.navigate(["./channel/setConfig"])
  }
  clickSetting (channel: Channel):void{
    this.channelDataService.setData(channel)
    this.channelJumpService.jumpSetting(channel);
  }
  linkUrl (channel: Channel):String{
    return ""
  }
}
