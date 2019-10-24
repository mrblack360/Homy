import { Component } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  bottomTabs = [
    {
      tab: 'home',
      icon: 'home',
      label: 'Home',
      url: '',
      badge: 0
    },
    {
      tab: 'post',
      icon: 'chatboxes',
      label: 'Post',
      url: 'p',
      badge: 8
    },
    {
      tab: 'platform',
      icon: 'globe',
      label: 'Platform',
      url: 'p',
      badge: 0
    },
    {
      tab: 'profile',
      icon: 'person',
      label: 'Profile',
      url: 'p',
      badge: 0
    }
  ];

  constructor() {}
}
