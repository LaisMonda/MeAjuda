import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Global } from 'src/global';
import { UsuarioService } from '../usuario.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})

export class DadosPage implements OnInit {
  dados: any;
  id: string;
  email: string;
  nome: string;
  sexo: string;
  senha: string;
  telefone: string;
  data: string;
  endereco: string;

  constructor(private router: Router, private x: Global, private servico: UsuarioService,
    public alertController: AlertController) {
    this.id = this.x.id; 
    console.log(this.id);
  }

  ngOnInit() {
  }

  async mudarDados(){
    this.dados = await this.servico.updateUser( this.id, this.nome, this.data, this.sexo, this.telefone,
      this.email, this.endereco); 
      console.log(this.nome);
      console.log(this.data);
      console.log(this.sexo);
      console.log(this.telefone);
      console.log(this.email);
      console.log(this.endereco);
  
      this.router.navigateByUrl('/tabs/tab5');

      const alerta = await this.alertController.create({
        header: 'Dados alterados com sucesso!',
        buttons: ['OK']
      });
    await alerta.present();
  }

  turnBack(){
      this.router.navigateByUrl('/tabs/tab5');
  }
  
}
