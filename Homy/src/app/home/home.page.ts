import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  topTabs = [
    {
      tab: 'home',
      icon: 'finger-print',
      label: 'Natives',
      url: 'natives',
      badge: 0
    },
    {
      tab: 'post',
      icon: 'link',
      label: 'Linked',
      url: 'linked',
      badge: 4
    },
    {
      tab: 'chats',
      icon: 'chatbubbles',
      label: 'Chats',
      url: 'chats',
      badge: 0
    }
  ];
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
      url: 'under_construction',
      badge: 8
    },
    {
      tab: 'platform',
      icon: 'globe',
      label: 'Platform',
      url: 'under_construction',
      badge: 0
    },
    {
      tab: 'profile',
      icon: 'person',
      label: 'Profile',
      url: 'under_construction',
      badge: 0
    }
  ];

  constructor() {}
}
