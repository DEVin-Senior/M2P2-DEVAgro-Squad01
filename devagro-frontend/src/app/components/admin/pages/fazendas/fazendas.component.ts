import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fazendas',
  templateUrl: './fazendas.component.html',
  styleUrls: ['./fazendas.component.css']
})
export class FazendasComponent implements OnInit {



  form: FormGroup = this.fb.group({
    farmName: [''],
    grain: [''],
    lastHarvestDay: [''],
    localization: ['']
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.listaFazendasArmazenamento = JSON.parse(String(localStorage.getItem("listaFazendas"))) || []
    localStorage.setItem("listaFazendas",JSON.stringify(this.listaFazendasArmazenamento))
    console.log(this.listaFazendasArmazenamento)
  }

  listaFazendasArmazenamento :Array<Object>=[]

  Fazenda_info:any = {
    id: 0,
    nome: "",
    grao: "",
    ultima_colheita: "",
    localizacao: ""
  }

  mudar_nome(nome:string):void{
    this.Fazenda_info.nome = nome
  }

  mudar_grao(grao:string):void{
    this.Fazenda_info.grao = grao
  }

  mudar_ultima_colheita(ultima_colheita:string):void{
    this.Fazenda_info.ultima_colheita = ultima_colheita
  }

  mudar_localizacao(localizacao:string):void{
    this.Fazenda_info.localizacao = localizacao
  }

  onSubmit(){
    let id = Number(localStorage.getItem("quantidade_fazendas"))
    if(id == null){
      this.Fazenda_info.id = 0
    }
    else{
      this.Fazenda_info.id = id
    }
    //STRINGFA O OBJ FAZENDA
    let fazenda_info_json: string = JSON.stringify(this.Fazenda_info)
    //ADD O OBJETO A LISTA
    this.listaFazendasArmazenamento.push(fazenda_info_json);
    //REFERENCIA O LOCAL STORAGE A LISTA
    localStorage.setItem("listaFazendas",JSON.stringify(this.listaFazendasArmazenamento))
    ///CRIA FAZENDA E LOCALSTORAGE REFERENTE
    localStorage.setItem("FAZENDA_" + String(id),fazenda_info_json)

    localStorage.setItem("quantidade_Fazendas",String(id + 1))
    
    ///EVENT EMITTER
    console.log(fazenda_info_json)
    console.log(this.Fazenda_info)
  }
}
