import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.css']
})
export class EmpresaCadastroComponent implements OnInit {
  //a lista de objetos
  lista:Array<Object>=[];

  constructor() { }

  ngOnInit(): void {
    this.listaCadastroArmazenado = JSON.parse(String(localStorage.getItem("listadecadastros"))) || []
    localStorage.setItem("listadecadastros",JSON.stringify(this.listaCadastroArmazenado))
    console.log(this.listaCadastroArmazenado)
  }

  valor:any

  listaCadastroArmazenado:Array<Object>=[]

  //Cadastros de empresas novas
  cadastro_empresa_info:any ={
    id: 1,
    nome_empresarial: "",
    CNPJ:"",
    endereco_da_empresa:"",
    email_da_empresa:"",
    telefone_da_empresa:"",
    senha_da_empresa:"",
    senha_da_empresa_novamente:"",
  }

  //salvar as coisas
  salvar_nome_empresarial(nome_empresarial: string):void{
    this.cadastro_empresa_info.nome_empresarial = nome_empresarial;
  }

  salvar_CNPJ(CNPJ: string):void{
    this.cadastro_empresa_info.CNPJ = CNPJ;
  }

  salvar_endereco_da_empresa(endereco_da_empresa: string):void{
    this.cadastro_empresa_info.endereco_da_empresa = endereco_da_empresa;
  }

  salvar_email_da_empresa(email_da_empresa: string):void{
    this.cadastro_empresa_info.email_da_empresa = email_da_empresa;
  }

  salvar_telefone_da_empresa(telefone_da_empresa: string):void{
    this.cadastro_empresa_info.telefone_da_empresa = telefone_da_empresa;
  }

  salvar_senha_da_empresa(senha_da_empresa: string):void{
    this.cadastro_empresa_info.senha_da_empresa = senha_da_empresa;
  }

  salvar_senha_da_empresa_novamente(senha_da_empresa_novamente: string):void{
    this.cadastro_empresa_info.senha_da_empresa_novamente = senha_da_empresa_novamente;
  }


  // função para cadastrar
  click_log_in():void{
    let id = Number(localStorage.getItem("quantidade_empresas_cadastradas"))
    if(id == null){
      this.cadastro_empresa_info.id = 1
    }
    else{
      this.cadastro_empresa_info.id = id
    }


    //empresa
    let cadastro_empresa_json: string = JSON.stringify(this.cadastro_empresa_info)
  
    //Inserindo O Objeto Grão á lista
    this.listaCadastroArmazenado.push(cadastro_empresa_json);
  
    //Referenciando o LocaStorage á lista
    localStorage.setItem("listaCadastroEmpresa",JSON.stringify(this.listaCadastroArmazenado))
    console.log(this.listaCadastroArmazenado)
  
    ///Cria LocalStorage e o grão referenciados
    localStorage.setItem("empresa_" + String(id),cadastro_empresa_json)
  
    localStorage.setItem("quantidade_empresas_cadastradas",String(id + 1))
  
    ///Evento 
    console.log(cadastro_empresa_json)
    console.log(this.cadastro_empresa_info)
  
  }
  
  pegar_empresa(id:Number):any{
    return JSON.parse(String(localStorage.getItem("empresa_" + String(id))))
  }
}