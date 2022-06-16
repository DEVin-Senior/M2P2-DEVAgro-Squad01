import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fazendas',
  templateUrl: './fazendas.component.html',
  styleUrls: ['./fazendas.component.css']
})
export class FazendasComponent implements OnInit {

  constructor() { }
  
  @Input() public titulo: string = "Fazendas"

  listaFazenda: any = [];

  ngOnInit(): void {

    this.listaFazenda = JSON.parse(String(localStorage.getItem("listaFazendas")));

  }

}




