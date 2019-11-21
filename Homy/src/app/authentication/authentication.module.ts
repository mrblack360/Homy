import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

// Imports from Angular Material
import { MatInputModule, MatFormFieldModule } from '@angular/material';

// components
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ]),
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
