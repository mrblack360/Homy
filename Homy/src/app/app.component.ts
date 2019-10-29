import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    // {
    //   title: 'Home',
    //   url: '/home',
    //   icon: 'home'
    // },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // }
    {
      title: 'Settings',
      url: 'under_construction',
      icon: 'settings'
    },
    {
      title: 'Create Group',
      url: 'under_construction',
      icon: 'people'
    },
    {
      title: 'Create New Account',
      url: 'under_construction',
      icon: 'person-add'
    },
    {
      title: 'Feeds',
      url: 'under_construction',
      icon: 'paper'
    },
    {
      title: 'Timezone',
      url: 'under_construction',
      icon: 'clock'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
