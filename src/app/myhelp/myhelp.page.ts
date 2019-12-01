import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import { DenunciaService } from '../denuncia.service';
import { Denuncia } from '../model/denuncia';
import { Global } from 'src/global';



@Component({
  selector: 'app-myhelp',
  templateUrl: './myhelp.page.html',
  styleUrls: ['./myhelp.page.scss'],
})
export class MyhelpPage implements OnInit {

  constructor(private x: Global,public alertController: AlertController, private router: Router,
  private servico: DenunciaService) { 
    console.log(this.x.id);
   }

    private tipoDenuncia: string;
    private nomeDenunciado: string;
    private dataDeNascDenunciado: string;
    private enderecoDenunciado: string;
    private telefoneDenunciado: string;
    private RgDenunciado: string;
    private cpfDenunciado: string;
    private emailDenunciado: string;
    private enderecoOcorrido: string;
    private dataOcorrido: string;
    private frequencia: string;
    private relacaoVA : string;
    private localDeTrabalho : string;
    private descricaoAgressor : string;
    private descricaoOcorrido : string;
    private id_user : string;

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

  enviar(){
    this.id_user = this.x.id;
    this.servico.insertDenuncia(this.tipoDenuncia, this.nomeDenunciado, this.dataDeNascDenunciado,
    this.enderecoDenunciado, this.telefoneDenunciado, this.RgDenunciado, this.cpfDenunciado,
    this.emailDenunciado, this.enderecoOcorrido, this.dataOcorrido, this.frequencia, this.relacaoVA, 
    this.localDeTrabalho, this.descricaoAgressor, this.descricaoOcorrido, this.id_user); 
      console.log(this.tipoDenuncia);
      console.log(this.nomeDenunciado);
      console.log(this.dataDeNascDenunciado);
      console.log(this.enderecoDenunciado);
      console.log(this.telefoneDenunciado);
      console.log(this.RgDenunciado);
      console.log(this.cpfDenunciado);
      console.log(this.emailDenunciado);
      console.log(this.enderecoOcorrido);
      console.log(this.dataOcorrido);
      console.log(this.frequencia);
      console.log(this.relacaoVA);
      console.log(this.localDeTrabalho);
      console.log(this.descricaoAgressor);
      console.log(this.descricaoOcorrido);
      console.log(this.id_user);

      //this.router.navigateByUrl('/tabs/tab1');
  }

  turnBack(){
    this.router.navigateByUrl('/tabs/tab1');
  }
}
