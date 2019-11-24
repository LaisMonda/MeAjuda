import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Denuncia } from './model/denuncia';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  constructor(private request: HttpClient) { }

  getAll() {
    return this.request.get<Denuncia[]>(API);
  }

   insertDenuncia(tipoDenuncia, nomeDenunciado, dataDeNascDenunciado, enderecoDenunciado,
    telefoneDenunciado, RgDenunciado, cpfDenunciado, emailDenunciado, enderecoOcorrido,
    dataOcorrido, frequencia, relacaoVA, localDeTrabalho, descricaoAgressor,
    descricaoOcorrido, id_user ) {
    const denuncia = {
      tipoDenuncia: tipoDenuncia,
      nomeDenunciado: nomeDenunciado,
      dataDeNascDenunciado: dataDeNascDenunciado,
      enderecoDenunciado: enderecoDenunciado,
      telefoneDenunciado: telefoneDenunciado,
      RgDenunciado: RgDenunciado,
      cpfDenunciado: cpfDenunciado,
      emailDenunciado: emailDenunciado,
      enderecoOcorrido : enderecoOcorrido,
      dataOcorrido: dataOcorrido,
      frequencia: frequencia,
      relacaoVA: relacaoVA,
      localDeTrabalho: localDeTrabalho,
      descricaoAgressor: descricaoAgressor,
      descricaoOcorrido: descricaoOcorrido,
      id_user: id_user     
    };

   this.request.post(API3, JSON.stringify(denuncia),
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

const API2 = 'https://andreqbs.com.br/api/product/read_one.php?id=';
const API = 'http://localhost/api/api_2/usuario/listar.php';
const API3 = 'http://localhost/api/api_2/denuncia/novo.php';
