import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule }     from './app-routing/app-routing.module';

// import module
import { ElModule } from 'element-angular';

import { NcheaderComponent } from './app-components/ncheader/ncheader.component';
import { NcmenuComponent } from './app-components/ncmenu/ncmenu.component';
import { BackcolComponent } from './app-components/backcol/backcol.component'

import { AddAppChannelComponent } from './app-page/add-app-channel/add-app-channel.component';
import { AddWebChannelComponent } from './app-page/add-web-channel/add-web-channel.component';
import { AddWxChannelComponent } from './app-page/add-wx-channel/add-wx-channel.component';
import { ChannelComponent } from './app-page/channel/channel.component';
import { ChannelDataStatisticsComponent } from './app-page/channel-data-statistics/channel-data-statistics.component';
import { ChannelManageComponent } from './app-page/channel-manage/channel-manage.component';
import { H5AppearanceComponent } from './app-page/h5-appearance/h5-appearance.component';
import { H5PreviewComponent } from './app-page/h5-preview/h5-preview.component';
import { PcAppearanceComponent } from './app-page/pc-appearance/pc-appearance.component';
import { PcPreviewComponent } from './app-page/pc-preview/pc-preview.component';
import { SetConfigComponent } from './app-page/set-config/set-config.component';
import { WelcomeComponent } from './app-page/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NcheaderComponent,
    NcmenuComponent,
    AddAppChannelComponent,
    AddWebChannelComponent,
    AddWxChannelComponent,
    ChannelComponent,
    ChannelDataStatisticsComponent,
    ChannelManageComponent,
    H5AppearanceComponent,
    H5PreviewComponent,
    PcAppearanceComponent,
    PcPreviewComponent,
    SetConfigComponent,
    WelcomeComponent,
    BackcolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    ElModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
