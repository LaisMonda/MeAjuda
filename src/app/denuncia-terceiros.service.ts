import { Injectable } from '@angular/core';
import { DenunciaTerceiros } from './model/denunciaTerceiros';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DenunciaTerceirosService {

  constructor(private request: HttpClient) { }
  
  getAll() {
    return this.request.get<DenunciaTerceiros[]>(API);
  }

   insertDenuncia(nomeVitima, dataDeNascVitima, telefoneVitima,cpfVitima, rgVitima, emailVitima,
    enderecoVitima, relacaoDV, tipoDenuncia, nomeDenunciado, dataDeNascDenunciado, enderecoDenunciado,
    telefoneDenunciado, RgDenunciado, cpfDenunciado, emailDenunciado, enderecoOcorrido,
    dataOcorrido, frequencia, relacaoVA, localDeTrabalho, descricaoAgressor,
    descricaoOcorrido, id_user ) {
    const denunciaTerceiros = {
      nomeVitima: nomeVitima,
      dataDeNascVitima: dataDeNascVitima,
      telefoneVitima: telefoneVitima,
      cpfVitima: cpfVitima,
      rgVitima: rgVitima,
      emailVitima: emailVitima,
      enderecoVitima: enderecoVitima,
      relacaoDV: relacaoDV,
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

   this.request.post(API3, JSON.stringify(denunciaTerceiros),
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
const API = 'http://localhost/api/api_2/denunciaTerceiros/listar.php';
const API3 = 'http://localhost/api/api_2/denunciaTerceiros/novo.php';


