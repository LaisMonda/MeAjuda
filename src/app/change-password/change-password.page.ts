import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/global';
import { UsuarioService } from '../usuario.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  constructor(private router: Router, private x: Global, private servico: UsuarioService,
    public alertController: AlertController) {
    this.id = this.x.id;
    console.log(this.id);
   }
  private id: string;
  private senhaAtual: string;
  private senhaNova: string;
  dados: any;
  
  ngOnInit() {
  }
  async mudarSenha(){
    this.dados = await this.servico.updatePass(this.id, this.senhaAtual, this.senhaNova); 
    console.log(this.id);
    console.log(this.senhaAtual);
    console.log(this.senhaNova);
  
      this.router.navigateByUrl('/tabs/tab5');

      const alerta = await this.alertController.create({
        header: 'senha alterada com sucesso!',
        buttons: ['OK']
      });
    await alerta.present();
  }

  turnBack(){
    this.router.navigateByUrl('/tabs/tab5');
}
}
