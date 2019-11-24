import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';



@Component({
  selector: 'app-otherhelp',
  templateUrl: './otherhelp.page.html',
  styleUrls: ['./otherhelp.page.scss'],
})
export class OtherhelpPage implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { }

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
  
  turnBack(){
    this.router.navigateByUrl('/tabs/tab1');
  }
}
