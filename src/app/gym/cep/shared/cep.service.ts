import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CEP } from '../model/cep.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  emmitCep ={}
constructor(private http:HttpClient) { }

search(cep:string){
  return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  .toPromise().then((res:Response) =>{
    this.emmitCep = this.converterResp(res)
    //console.log(this.emmitCep)
   return  this.converterResp(res)

  })
  }
  private converterResp(cepRes):CEP{
    let cep = new CEP()
    cep.cep = cepRes.cep;
    cep.street = cepRes.logradouro;
    cep.city = cepRes.localidade
    cep.neighborhood = cepRes.bairro
    cep.complement = cepRes.complemento
    cep.number = cepRes.unidade
    cep.state  =  cepRes.uf
    return cep

  }
}
