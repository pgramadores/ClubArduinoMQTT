import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ConectarPage } from '../pages/conectar/conectar';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { NosotrosPage } from '../pages/nosotros/nosotros';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {
  MqttMessage,
  MqttModule,
  MqttService
} from 'angular2-mqtt';

@NgModule({
  declarations: [
    MyApp,
    ConectarPage,
    EstadisticasPage,
    NosotrosPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    MqttModule.forRoot({
      provide: MqttService,
      //useFactory: mqttServiceFactory
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConectarPage,
    EstadisticasPage,
    NosotrosPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
