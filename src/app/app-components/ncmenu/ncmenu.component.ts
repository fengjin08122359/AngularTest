import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-ncmenu',
  templateUrl: './ncmenu.component.html',
  styleUrls: ['./ncmenu.component.css']
})
export class NcmenuComponent implements OnInit {
  routerData = [{
      name: 'welcome',
      props: {
        icon: 'el-icon-menu'
      },
      meta:
      {
        title: '首页'
      }
    },
    {
      name: 'channel',
      props: {
        icon: 'el-icon-more'
      },
      meta:
      {
        title: '渠道管理'
      }
    },
    {
      name: 'channelDataStatistics',
      props: {
        icon: 'el-icon-menu'
      },
      meta:
      {
        title: '渠道数据统计'
      }
    }]
  
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    console.log(this.route)
  }
  
}
