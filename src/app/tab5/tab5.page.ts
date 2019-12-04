import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/global';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  usuario: any
  id: string;

  constructor(private x: Global ,private router: Router, private servico: UsuarioService) { 
    console.log(this.x.id);
    
    this.id = this.x.id;
    }

   /* mostrarDados(){
      this.servico.getOneUser(this.id).subscribe((data: Usuario) =>
      this.usuario = {
          id: data.$id,
          nome: data.$nome,
          sexo: data.$sexo,
          email: data.$email,
          dataDeNasc: data.$dataNascimento,
          endereco: data.$endereço
    });
        this.id = this.usuario.id;
    }*/

  ngOnInit() {
  }

  changePassword(){
    this.router.navigateByUrl('/change-password');
  }

  denuncias(){
    this.router.navigateByUrl('/denuncias');
  }
  dados(){
    this.router.navigateByUrl('/dados');
  }
  logout(){
    this.x.id = "null";
    this.id = "null";
    this.router.navigateByUrl('/login');
    console.log(this.id);
    console.log(this.x.id);
  }

}
