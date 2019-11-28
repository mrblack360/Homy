import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sorry',
      subHeader: 'Maswi is Processing Your Login Logics for a moment',
      message: 'Try again in a moment',
      buttons: ['Retry', 'OK']
    });

    await alert.present();
  }
}
