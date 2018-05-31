import { Injectable } from '@angular/core';
import { Router }    from '@angular/router';
import { Channel }      from '../../app-class/Channel';

@Injectable()
export class ChannelJumpService {

  constructor(private router: Router) { }
  
  jumpSetting (channel: Channel):void{
    this.router.navigate(["./channel/"+this.getChannelType(channel)])
  }
  jumpAppearance (channel: Channel):void{
    this.router.navigate(["./channel/"+this.getAppearanceType(channel)])
  }
  getChannelType(channel: Channel):string{
    if (!channel) {
      return "addWebChannel"
    } else if (channel.type==="web") {
      return "addWebChannel"
    } else if (channel.type==="wx") {
      return "addWxChannel"
    } else if (channel.type==="app") {
      return "addAppChannel"
    }
    return "addWebChannel"
  }
  getAppearanceType(channel: Channel):string{
    if (!channel) {
      return ""
    } else if (channel.type==="web") {
      return "pcAppearance"
    } else if (channel.type==="wx") {
      return ""
    } else if (channel.type==="app") {
      return "h5Appearance"
    }
    return ""
  }
}
