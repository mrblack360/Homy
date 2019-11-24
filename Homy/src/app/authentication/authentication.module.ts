import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

// Imports from Angular Material
import { MatInputModule, MatFormFieldModule } from '@angular/material';

// Imports from Components
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]),
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class AuthenticationModule { }
