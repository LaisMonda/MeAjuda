import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../model/usuario';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  private user: string;
  private date: Date;
  private sexo: string;
  private telefone: string;
  private senha: string;
  private email: string;
  private endereco: string;


  constructor(private router: Router, private servico: UsuarioService) { 
    servico.insertUser('lais','2002-09-19','feminino','67999190692 ','123456','lais.shadow@gmail.com','rua tal');

  }

  ngOnInit() {
  }

  submitLogin() { 
    console.log(this.user);
    console.log(this.date);
    console.log(this.sexo);
    console.log(this.telefone);
    console.log(this.senha);
    console.log(this.email);
    console.log(this.endereco);
 
 }

  about(){
    this.router.navigateByUrl('/about');
  }

}
