import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Usuario } from './model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private request: HttpClient) {
  }

  getOneUser(id) {
    return this.request.get<Usuario>(API2 + id);
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
      endereço: adress
      
    };
    this.request.post(API3, JSON.stringify(usuario),
        {headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }
}

const API2 = 'https://andreqbs.com.br/api/product/read_one.php?id=';
const API = 'http://localhost/api/api_2/usuario/listar.php';
const  API3 = 'http://localhost/api/api_2/usuario/novo.php';




