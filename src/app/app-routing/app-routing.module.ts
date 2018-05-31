import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddAppChannelComponent } from '../app-page/add-app-channel/add-app-channel.component';
import { AddWebChannelComponent } from '../app-page/add-web-channel/add-web-channel.component';
import { AddWxChannelComponent } from '../app-page/add-wx-channel/add-wx-channel.component';
import { ChannelComponent } from '../app-page/channel/channel.component';
import { ChannelDataStatisticsComponent } from '../app-page/channel-data-statistics/channel-data-statistics.component';
import { ChannelManageComponent } from '../app-page/channel-manage/channel-manage.component';
import { H5AppearanceComponent } from '../app-page/h5-appearance/h5-appearance.component';
import { H5PreviewComponent } from '../app-page/h5-preview/h5-preview.component';
import { PcAppearanceComponent } from '../app-page/pc-appearance/pc-appearance.component';
import { PcPreviewComponent } from '../app-page/pc-preview/pc-preview.component';
import { SetConfigComponent } from '../app-page/set-config/set-config.component';
import { WelcomeComponent } from '../app-page/welcome/welcome.component'

const appRoutes:Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},  
  { path: 'channel', component: ChannelComponent,
    children: [{
      path: '', component: ChannelManageComponent
    }, {
      path: 'addWebChannel', component: AddWebChannelComponent
    }, {
      path: 'addWxChannel', component: AddWxChannelComponent
    }, {
      path: 'addAppChannel', component: AddAppChannelComponent
    }, {
      path: 'h5Appearance', component: H5AppearanceComponent
    }, {
      path: 'h5Preview', component: H5PreviewComponent
    }, {
      path: 'pcAppearance', component: PcAppearanceComponent
    }, {
      path: 'pcPreview', component: PcPreviewComponent
    }, {
      path: 'setConfig', component: SetConfigComponent
    }] 
  }, 
  { path: 'channelDataStatistics', component: ChannelDataStatisticsComponent}, 
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
