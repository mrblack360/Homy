import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  firstName = '';
  lastName = '';

  constructor(public alertController: AlertController) { }

  ngOnInit() { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sorry',
      subHeader: 'Maswi is Processing Your SignUp Logics for a moment',
      message: 'Try again in a moment',
      buttons: ['OK']
    });

    await alert.present();
  }

}
