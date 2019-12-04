import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Global } from 'src/global';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private email: string;
  private senha: string;
  private dados: any;
  private id_user: string;


  constructor(private x: Global,private router: Router, 
  private usuario: UsuarioService) { 

  }

  ngOnInit() {
  }
  
  async login(email_user, senha_user) {
    this.dados = await this.usuario.login(this.email, this.senha);
    console.log(this.email);
    console.log(this.senha);
    console.log(this.dados.id);

    this.x.id = this.dados.id;
    
    this.router.navigateByUrl('/tabs/tab1');
   
  }

  cadastro(){
    this.router.navigateByUrl('/cadastro');
  }
  
  

}
