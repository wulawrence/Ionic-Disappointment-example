import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MagicBall } from '../providers/magic-ball/magic-ball';
import { ServiceproviderProvider } from '../providers/serviceprovider/serviceprovider';
import { GithubGetterProvider } from '../providers/github-getter/github-getter';
import { Auth0Provider } from '../providers/auth0/auth0';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MagicBall,
    ServiceproviderProvider,
    GithubGetterProvider,
    Auth0Provider
  ]
})
export class AppModule {}
