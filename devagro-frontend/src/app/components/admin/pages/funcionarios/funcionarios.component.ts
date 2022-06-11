import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  constructor() { }

  funcionario_info:any = {
    id: 0,
    nome: "",
    fazenda: "",
    CPF: "",
    telefone: "",
    funcao_princila: "",
    ativo: ""
  }

  mudar_nome(nome:string):void{
    this.funcionario_info.nome = nome
  }

  mudar_fazenda(fazenda:string):void{
    this.funcionario_info.fazenda = fazenda
  }

  mudar_CPF(CPF:string):void{
    this.funcionario_info.CPF = CPF
  }

  mudar_telefone(telefone:string):void{
    this.funcionario_info.telefone = telefone
  }

  mudar_funcao_princila(funcao_princila:string):void{
    this.funcionario_info.funcao_princila = funcao_princila

  }

  mudar_ativo(ativo:boolean):void{
    this.funcionario_info.ativo = ativo
  }

  apertar_cadastrar():void{
    let id = Number(localStorage.getItem("quantidade_funcionarios"))
    if(id == null){
      this.funcionario_info.id = 0
    }
    else{
      this.funcionario_info.id = id
    }

    let funcionario_info_json: string = JSON.stringify(this.funcionario_info)
    localStorage.setItem("funcionario_" + String(id),funcionario_info_json)

    localStorage.setItem("quantidade_funcionarios",String(id + 1))
    
    console.log(funcionario_info_json)
  }

  pegar_funcionario(id:Number):any{
    return JSON.parse(String(localStorage.getItem("funcionario_" + String(id))))
  }

  ngOnInit(): void {
  }

}
