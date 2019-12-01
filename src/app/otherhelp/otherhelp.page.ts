import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import { Global } from 'src/global';
import { DenunciaService } from '../denuncia.service';
import { DenunciaTerceirosService } from '../denuncia-terceiros.service';



@Component({
  selector: 'app-otherhelp',
  templateUrl: './otherhelp.page.html',
  styleUrls: ['./otherhelp.page.scss'],
})
export class OtherhelpPage implements OnInit {

  constructor(private x: Global, public alertController: AlertController, private router: Router,
    private servico: DenunciaTerceirosService) {
    console.log(this.x.id);
  }

    private nomeVitima: string;
    private dataDeNascVitima: string;
    private telefoneVitima: string;
    private cpfVitima: string;
    private rgVitima: string;
    private emailVitima: string;
    private enderecoVitima: string;
    private relacaoDV: string;
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
     
      this.servico.insertDenuncia(this.nomeVitima, this.dataDeNascVitima, this.telefoneVitima,
      this.cpfVitima, this.rgVitima, this.emailVitima, this.enderecoVitima, this.relacaoDV,
       this.tipoDenuncia, this.nomeDenunciado, this.dataDeNascDenunciado,
      this.enderecoDenunciado, this.telefoneDenunciado, this.RgDenunciado, this.cpfDenunciado,
      this.emailDenunciado, this.enderecoOcorrido, this.dataOcorrido, this.frequencia, this.relacaoVA, 
      this.localDeTrabalho, this.descricaoAgressor, this.descricaoOcorrido, this.id_user); 
        console.log(this.nomeVitima);
        console.log(this.dataDeNascVitima);
        console.log(this.telefoneVitima);
        console.log(this.cpfVitima);
        console.log(this.rgVitima);
        console.log(this.emailVitima);
        console.log(this.enderecoVitima);
        console.log(this.relacaoDV);
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
        
  
  }
  
  turnBack(){
    this.router.navigateByUrl('/tabs/tab1');
  }
}
