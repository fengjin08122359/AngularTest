import { Injectable } from '@angular/core';
import { Channel }      from '../../app-class/Channel';
import { CHANNEL } from './mock-channel-data';

@Injectable()
export class ChannelDataService {
  
  constructor() { }
  
  getData(): Promise<Channel> {
    return Promise.resolve(CHANNEL);
  }
  
  setData(json: Channel): Channel {
    CHANNEL.pk = json.pk || ''
    CHANNEL.name = json.name || ''
    CHANNEL.type = json.type || 'web'
    CHANNEL.memo = json.memo || ''
    CHANNEL.monitor = json.monitor || '1'
    CHANNEL.linkType = json.linkType || '1'
    CHANNEL.publicNo = json.publicNo || ''
    CHANNEL.appId = json.appId || ''
    CHANNEL.appSecret = json.appSecret || ''
    CHANNEL.sendType = json.sendType || '1'
    CHANNEL.sendLink = json.sendLink || ''
    return CHANNEL
  }
}
