import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Usuario } from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private request: HttpClient) {
  }

  async getOneUser(id_user) {
      return this.request.get<Usuario>(API2 + id_user);
  }

  async updateUser(id, name, date, sex, telephone, email, adress){
    const usuario = {
      id : id,
      nome: name,
      dataNascimento: date,
      sexo: sex,
      telefone: telephone,
      email : email,
      endereco: adress     
    };

   this.request.post(API5, JSON.stringify(usuario),
        {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(
          data => {
            console.log('POST deu certo ', data);
          },
          error  => {
            console.log('Error', error);
          }
      );
  }

  async updatePass(id, senhaAtual, senhaNova){
    const usuario = {
      id : id,
      senhaAtual: senhaAtual,
      senhaNova: senhaNova
    };

   this.request.post(API6, JSON.stringify(usuario),
        {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(
          data => {
            console.log('POST deu certo ', data);
          },
          error  => {
            console.log('Error', error);
          }
      );
  }

  async login(email_user,senha_user) {

    const usuario = {
      email : email_user,  
      senha : senha_user
    };

    let resultadoAsync;

     resultadoAsync = await this.request.post(API4, JSON.stringify(usuario),
        {headers: new HttpHeaders({'Content-Type': 'application/json'})}).toPromise();
        console.log(resultadoAsync);
        return resultadoAsync;
  }

  getAll() {
    return this.request.get<Usuario[]>(API);
  }

  insertUser(name, date, sex, telephone, pass, email, adress ) {
    const usuario = {
      nome: name,
      dataNascimento: date,
      sexo: sex,
      telefone: telephone,
      senha : pass,
      email : email,
      endereco: adress     
    };

   this.request.post(API3, JSON.stringify(usuario),
        {headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(
          data => {
            console.log('POST deu certo ', data);
          },
          error  => {
            console.log('Error', error);
          }
      );
  }




}

const API2 = 'http://localhost/api/api_2/usuario/listarUm.php';
const API = 'http://localhost/api/api_2/usuario/listar.php';
const API3 = 'http://localhost/api/api_2/usuario/novo.php';
const API4 = 'http://localhost/api/api_2/usuario/login.php';
const API5 = 'http://localhost/api/api_2/usuario/update.php';
const API6 = 'http://localhost/api/api_2/usuario/updatePass.php';




