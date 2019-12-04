import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContatoService } from '../contato.service';
import { Global } from 'src/global';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  private nome: string;
  private telefone: string;
  private id_user: string;
  private dados: any;

  constructor(private x: Global, private router: Router, private servico: ContatoService,
    public alertController: AlertController) {
    console.log(this.x.id);
   }

  ngOnInit() {
  }

  turnBack(){
    this.router.navigateByUrl('/tabs/tab2');
  }

  async cadastrar(){
      this.id_user = this.x.id;
      this.dados = await this.servico.insertContact(this.nome, this.telefone, this.id_user); 
      console.log(this.nome);
      console.log(this.telefone);
      console.log(this.id_user);
      
      const alerta = await this.alertController.create({
        header: 'Contato cadastrado com sucesso!',
        message: 'Agora se você estiver em perigo, seu contato será avisado com uma mensagem SMS!',
        buttons: ['OK']
    });
    await alerta.present();

    this.router.navigateByUrl('/tabs/tab1');
  }
}
