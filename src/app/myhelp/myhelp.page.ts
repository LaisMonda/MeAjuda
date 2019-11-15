import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-myhelp',
  templateUrl: './myhelp.page.html',
  styleUrls: ['./myhelp.page.scss'],
})
export class MyhelpPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Verifique se todas as informações inseridas estão corretas, assim que enviada, sua denúncia'
      + 'será encaminhada e não poderá ser alterada.',
      buttons: ['Voltar', 'Enviar']
    });

    await alert.present();
  }
}
