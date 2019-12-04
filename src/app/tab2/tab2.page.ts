import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/contato';
import { ContatoService } from '../contato.service';
import { Router } from '@angular/router';
import { Global } from 'src/global';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  contato: string;
  private dados: any;
  id: string;

  listaContatos: Observable<Contato[]>;

  constructor(private x: Global, private servico: ContatoService, private router: Router) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log(this.x.id);
    this.id = this.x.id;
    this.listaContatos = this.servico.getOneContact(this.id);
    console.log(this.listaContatos);
  }

  cadastrar(){
    this.router.navigateByUrl('/contato');
  }

}
