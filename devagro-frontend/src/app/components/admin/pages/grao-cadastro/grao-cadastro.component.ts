import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grao-cadastro',
  templateUrl: './grao-cadastro.component.html',
  styleUrls: ['./grao-cadastro.component.css']
})


 
export class GraoCadastroComponent implements OnInit {
  

   constructor(private router: Router) { }


   @Input() public titulo: string = "Cadastro Grãos"


  ngOnInit(): void {
    this.listaGraosArmazenamento = JSON.parse(String(localStorage.getItem("listaGraos"))) || []
    localStorage.setItem("listaGraos",JSON.stringify(this.listaGraosArmazenamento))
     console.log(this.listaGraosArmazenamento)
  }


  
listaGraosArmazenamento :Array<Object>=[] 


//Grão Lista
grao_info:any = {
  id: 0,
  nome: "",
  fazenda: "",
  colheita: "",
  informacoes: "",
}

mudar_nome(nome:string):void{
  this.grao_info.nome = nome
}

mudar_fazenda(fazenda:string):void{
  this.grao_info.fazenda = fazenda
}

mudar_colheita(colheita:string):void{
  this.grao_info.colheita = colheita
}

mudar_informacoes(informacoes:string):void{
  this.grao_info.informacoes = informacoes
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
}

pegar_grao(id:Number):any{
  return JSON.parse(String(localStorage.getItem("grao_" + String(id))))
}

btnClick = () => {
  
  this.router.navigateByUrl('/admin/graos');
};
}
