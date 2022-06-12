import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-grao-cadastro',
  templateUrl: './grao-cadastro.component.html',
  styleUrls: ['./grao-cadastro.component.css']
})

export class GraoCadastroComponent implements OnInit {

            mudouValor = new EventEmitter();
            lista:Array<Object>=[]

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
  CPF: "",
  telefone: "",
}

mudar_nome(nome:string):void{
  this.grao_info.nome = nome
}

mudar_fazenda(fazenda:string):void{
  this.grao_info.fazenda = fazenda
}

mudar_CPF(CPF:string):void{
  this.grao_info.CPF = CPF
}

mudar_telefone(telefone:string):void{
  this.grao_info.telefone = telefone
}

//Função cadastrar 

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
