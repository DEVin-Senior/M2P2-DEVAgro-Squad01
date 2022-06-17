import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propriedades-cadastradas',
  templateUrl: './propriedades-cadastradas.component.html',
  styleUrls: ['./propriedades-cadastradas.component.css']
})
export class PropriedadesCadastradasComponent implements OnInit {

  constructor() { }

  listaFazenda: any = [];

  ngOnInit(): void {

    this.listaFazenda = JSON.parse(String(localStorage.getItem("listaFazendas")));

  }

}
