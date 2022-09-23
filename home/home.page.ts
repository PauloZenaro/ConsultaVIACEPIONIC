import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    cep : string;
    resultado : any;
    localidade : string;
    logradouro : string;
    bairro : string;
    uf : string;
    cepjson : string;
    constructor(private http : HttpClient) {

  }

  getcep() {
    this.resultado = this.http.get("https://viacep.com.br/ws/" + this.cep + "/json/").toPromise();
    this.resultado.then((json) =>{
    console.log(json);
    this.resultado = json;
    this.localidade = json.localidade;
    this.logradouro = json.logradouro;
    this.bairro = json.bairro;
    this.uf = json.uf;
    this.cepjson = json.cep
    })
  }
}
