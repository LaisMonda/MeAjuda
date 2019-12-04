import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Contato } from './model/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private request: HttpClient) {
  }

  getOneContact(id) {
    return this.request.get<Contato[]>(API2+id);
  }

  getAll(id_user) {
    return this.request.get<Contato[]>(API + id_user);
  }

  async insertContact(nome, telefone, id_user ) {
    const contato = {
      nome: nome,
      telefone: telefone,
      id_user: id_user
    };

    this.request.post(API3, JSON.stringify(contato),
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

const API2 = 'http://localhost/api/api_2/contato/listarUm.php?id=';
const API = 'http://localhost/api/api_2/contato/listar.php';
const  API3 = 'http://localhost/api/api_2/contato/novo.php';

