import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, ChildrenOutletContexts } from '@angular/router';

import { HomePage } from './home.page';
import { NativesComponent } from './pages/natives/natives.component';
import { HomeComponent } from './pages/home/home.component';
import { LinkedComponent } from './pages/linked/linked.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { PlatformComponent } from './pages/platform/platform.component';
import { PostsComponent } from './pages/posts/posts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: '',
            redirectTo: 'home'
          },
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'natives',
            component: NativesComponent
          },
          {
            path: 'linked',
            component: LinkedComponent
          },
          {
            path: 'chats',
            component: ChatsComponent
          },
          {
            path: 'platform',
            component: PlatformComponent
          },
          {
            path: 'posts',
            component: PostsComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    HomePage,
    NativesComponent,
    HomeComponent,
    LinkedComponent,
    ChatsComponent,
    PlatformComponent,
    PostsComponent
  ]
})
export class HomePageModule {}
