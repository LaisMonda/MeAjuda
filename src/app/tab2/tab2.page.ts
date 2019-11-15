import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/contato';
import { ContatoService } from '../contato.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  usuario: string;

  listaContatos: Observable<Contato[]>

  constructor(private servico: ContatoService,
  private router: Router) {
    if  (this.router.getCurrentNavigation().extras.state != null) {
      this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
      console.log(this.router.getCurrentNavigation().extras.state.usuario);
      console.log(this.router.getCurrentNavigation().extras.state.senha);
   }
  }

  ngOnInit() {
  }

}
