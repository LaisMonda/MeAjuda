import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../model/usuario';
import { AlertController } from '@ionic/angular';
import { Global } from 'src/global';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  private dados: any;
  private user: string;
  private date: string;
  private sexo: string;
  private telefone: string;
  private senha: string;
  private email: string;
  private endereco: string;

  constructor(private x: Global,private router: Router, private servico: UsuarioService, 
  public alertController: AlertController) { 

  }

  ngOnInit() {
  }

  async cadastrar(){
    this.dados = await this.servico.insertUser(this.user, this.date, this.sexo, this.telefone,
    this.senha, this.email, this.endereco); 
    console.log(this.user);
    console.log(this.date);
    console.log(this.sexo);
    console.log(this.telefone);
    console.log(this.senha);
    console.log(this.email);
    console.log(this.endereco);

    this.x.id = this.dados.id;

    console.log(this.x.id);

    this.router.navigateByUrl('/tabs/tab1');
      const alerta = await this.alertController.create({
        header: 'Cadastro realizado com sucesso!',
        message: 'Agora você pode utilizar o app normalmente,'
        + 'seus dados estarão disponíves em seu perfil para quaisquer alterações.',
        buttons: ['OK']
      });
        await alerta.present();
  }

  about(){
    this.router.navigateByUrl('/about');
  }

}
