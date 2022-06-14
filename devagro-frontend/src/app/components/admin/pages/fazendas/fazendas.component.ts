import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fazendas',
  templateUrl: './fazendas.component.html',
  styleUrls: ['./fazendas.component.css']
})
export class FazendasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.listaGraosArmazenamento = JSON.parse(String(localStorage.getItem("listaGraos"))) || []
    localStorage.setItem("listaGraos",JSON.stringify(this.listaGraosArmazenamento))//Array( JSON.parse(String(localStorage.getItem("listaGraos"))))
    console.log(this.listaGraosArmazenamento)

  }
  onstructor() { }
  valor:any

  listaGraosArmazenamento :Array<Object>=[] 

  //Grão Lista
  grao_info:any = {
    id: 0,
    nome: "",
    fazenda: "",
    colheita: "",
    informacoes: "",
  }

  click_adicionarFazendas():void{
    
    let listaFazendas = [{id: 0, fazenda: 'Estância das vivências', colheita: '25/08/2022' },
     {id: 1, fazenda: 'Arrozeira do futuro', colheita: '14/09/2022'},
     {id: 2, fazenda: 'Fazenda milharal', colheita: '15/09/2022'},
     {id: 3, fazenda: 'Fazenda Horizonte', colheita: '08/10/2022'},
     {id: 4, fazenda: 'Fazenda Brasil', colheita: '30/12/2022'}];

      localStorage.setItem('listaFazendas', JSON.stringify(listaFazendas));
    
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



  click_cadastrar():void{
    let id = Number(localStorage.getItem("quantidade_grao"))
    if(id == null){
      this.grao_info.id = 0
    }
    else{
      this.grao_info.id = id
    }

    //Grão
    let grao_info_json: string = JSON.stringify(this.grao_info)

    //Inserindo O Objeto Grão á lista
    this.listaGraosArmazenamento.push(grao_info_json);

    //Referenciando o LocaStorage á lista
    localStorage.setItem("listaGraos",JSON.stringify(this.listaGraosArmazenamento))
    console.log(this.listaGraosArmazenamento)

    ///Cria LocalStorage e o grão referenciados
    localStorage.setItem("grao_" + String(id),grao_info_json)

    localStorage.setItem("quantidade_grao",String(id + 1))

    ///Evento 
    console.log(grao_info_json)
    console.log(this.grao_info)
  }
  pegar_grao(id:Number):any{
    return JSON.parse(String(localStorage.getItem("grao_" + String(id))))
  }

}




