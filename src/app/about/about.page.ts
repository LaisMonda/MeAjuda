import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  listaUsuarios: Observable<Usuario[]>

  constructor(private servico: UsuarioService,
              private router: Router) {
    this.listaUsuarios = servico.getAll();
  }

  ngOnInit() {
  }

}