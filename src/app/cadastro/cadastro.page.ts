import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../model/usuario';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  private user: string;
  private date: string;
  private sexo: string;
  private telefone: string;
  private senha: string;
  private email: string;
  private endereco: string;

  constructor(private router: Router, private servico: UsuarioService) { 

  }

  ngOnInit() {
  }

  cadastrar(){
    this.servico.insertUser(this.user, this.date, this.sexo, this.telefone,
    this.senha, this.email, this.endereco); 
    console.log(this.user);
    console.log(this.date);
    console.log(this.sexo);
    console.log(this.telefone);
    console.log(this.senha);
    console.log(this.email);
    console.log(this.endereco);
    this.router.navigateByUrl('/tabs/tab1');
  }
  
  about(){
    this.router.navigateByUrl('/about');
  }

}
