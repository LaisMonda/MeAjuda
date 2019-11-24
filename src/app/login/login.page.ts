import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private email: string;
  private senha: string;
  private id: string;

  constructor(private router: Router, 
  private usuario: UsuarioService) { }

  ngOnInit() {
  }

  login(email_user, senha_user) {
    this.usuario.login(this.email, this.senha);
    console.log(this.email);
    console.log(this.senha);
    console.log(this.id);
  }
  
  navegar(id){
    this.router.navigateByUrl('/tab1', {state : {idenviado : id}});
  }

}
