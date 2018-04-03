import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { ServiceproviderProvider} from "../providers/serviceprovider/serviceprovider";
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";
import { GithubGetterProvider} from "../providers/github-getter/github-getter";

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  rootPage: any = HomePage;
  // users: any;
  title = 'app';
  results = '';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private serviceProvider: ServiceproviderProvider,
              private http: HttpClient, private gitGetter: GithubGetterProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit(): void {
    this.http.get('../manifest.json').subscribe(data => {
      console.log(data);
    });
  }

}
  // private populateUsers() {
  //   this.serviceProvider.getData().subscribe((event: HttpEvent<any>) => {
  //     switch (event.type) {
  //       case HttpEventType.Sent:
  //         console.log('Request sent!');
  //         break;
  //       case HttpEventType.ResponseHeader:
  //         console.log('Response header received!');
  //         break;
  //       case HttpEventType.DownloadProgress:
  //         const kbLoaded = Math.round(event.loaded / 1024);
  //         console.log(`Download in progress! ${kbLoaded}Kb loaded`);
  //         break;
  //       case HttpEventType.Response:
  //         console.log('Done!', event.body);
  //         this.users = event.body;
  //     }
  //   });
  // }
// }

