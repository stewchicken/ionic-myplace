import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { Geolocation } from '@ionic-native/geolocation';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AgmCoreModule } from '@agm/core';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPlacePage } from "../pages/new-place/new-place";
import { PlacePage } from "../pages/place/place";
import { PlaceService } from "../services/places.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // IonicStorageModule.forRoot(MyApp)
    //  AIzaSyC75vc9tMx6DeA3-gMJIXjvbct9arPZz4I 
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC75vc9tMx6DeA3-gMJIXjvbct9arPZz4I'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPlacePage,
    PlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PlaceService,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
