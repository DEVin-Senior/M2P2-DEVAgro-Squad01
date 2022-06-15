import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fazendas',
  templateUrl: './fazendas.component.html',
  styleUrls: ['./fazendas.component.css']
})
export class FazendasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let listaFazendas: any = [{id: 0, fazenda: 'Estância das vivências', colheita: '25/08/2022' },
     {id: 1, fazenda: 'Arrozeira do futuro', colheita: '14/09/2022'},
     {id: 2, fazenda: 'Fazenda milharal', colheita: '15/09/2022'},
     {id: 3, fazenda: 'Fazenda Horizonte', colheita: '08/10/2022'},
     {id: 4, fazenda: 'Fazenda Brasil', colheita: '30/12/2022'}];

    localStorage.setItem('listaFazendas', JSON.stringify(listaFazendas));

  }

  listaFazendas :Array<Object>=[] 

  listaFazenda = JSON.parse(String(localStorage.getItem("listaFazendas")))

  click_adicionarFazendas():void{
    
    for (let i = 0; i<= 5; i++){
      switch (i){
        case 0:
          let info01 = {id: 0, fazenda: 'Estância das vivências', colheita: '25/08/2022'};
          localStorage.setItem("fazendas_"+i,JSON.stringify(info01))
          break;
        case 1:
          let info02 = {id: 1, fazenda: 'Arrozeira do futuro', colheita: '14/09/2022'};
          localStorage.setItem("fazendas_"+i,JSON.stringify(info02))
          break;
        case 2:
          let info03 = {id: 2, fazenda: 'Fazenda milharal', colheita: '15/09/2022'};
          localStorage.setItem("fazendas_"+i,JSON.stringify(info03))
          break;
        case 3:
          let info04 = {id: 3, fazenda: 'Fazenda Horizonte', colheita: '08/10/2022'};
          localStorage.setItem("fazendas_"+i,JSON.stringify(info04))
          break;
        case 4:
          let info05 = {id: 4, fazenda: 'Fazenda Brasil', colheita: '30/12/2022'};
          localStorage.setItem("fazendas_"+i,JSON.stringify(info05))
          break;
        default:
          break;
      }
    }
  }

  pegar_fazendas():any{
    return JSON.parse(String(localStorage.getItem("listaFazendas")))
  }

}




