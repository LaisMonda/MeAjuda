import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContatoService } from '../contato.service';



@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  private user: string;
  private telefone: string;
  private id_user: string;

  constructor(private router: Router, private servico: ContatoService) { }

  ngOnInit() {
  }

  turnBack(){
    this.router.navigateByUrl('/tabs/tab2');
  }

  cadastrar(){
    this.servico.insertContact(this.user, this.telefone, this.id_user); 
      console.log(this.user);
      console.log(this.telefone);
      console.log(this.id_user);
  }
}
