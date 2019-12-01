import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContatoService } from '../contato.service';
import { Global } from 'src/global';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  private nome: string;
  private telefone: string;
  private id_user: string;

  constructor(private x: Global, private router: Router, private servico: ContatoService) {
    console.log(this.x.id);
   }

  ngOnInit() {
  }

  turnBack(){
    this.router.navigateByUrl('/tabs/tab2');
  }

  cadastrar(){
    this.servico.insertContact(this.nome, this.telefone, this.id_user); 
      this.id_user = this.x.id;
      console.log(this.nome);
      console.log(this.telefone);
      console.log(this.id_user);
  }
}
