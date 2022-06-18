import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-funcionario-altera-cadastro',
  templateUrl: './funcionario-altera-cadastro.component.html',
  styleUrls: ['./funcionario-altera-cadastro.component.css']
})
export class FuncionarioAlteraCadastroComponent implements OnInit {

  constructor() { }

  funcionarioInfo={
    nome:"",
    fazenda:"",
    funcaoPrincipal:""
  }
  funcionario_info= {
    id: 0,
    nome: "",
    fazenda: "",
    CPF: "",
    telefone: "",
    funcao_princila: "",
    ativo: true
  }

  funcionario_atualizado={
    id: 0,
    nome: "",
    fazenda: "",
    CPF: "",
    telefone: "",
    funcao_princila: "",
    ativo: true

  }

 
  nome:string=""
  id:number = 0
  fazenda:string= ""
  CPF:string= ""
  telefone:string= ""
  funcaoPrincipal:string= ""
  ativo:boolean=true
  
 
  ngOnInit(): void {
    this.constroiLsitaObjeto()
    console.log(this.listLocalStorage)
  }

  listLocalStorage:Array<String> = Object(JSON.parse( String(localStorage.getItem("listaFuncionarios"))))
  listaLocalStorageObject :Array<Object> = []
  

  alteraInfo(){ 
    console.log("xxxxx")
    let valorNome = document.querySelector("#input-nome") as HTMLInputElement
    let valorFazenda = document.querySelector("#input-fazenda") as HTMLInputElement
    let valorFuncao = document.querySelector("#input-funcaoPrincipal") as HTMLInputElement
    
    let inputNome = valorNome.value
    let inputFazenda = valorFazenda.value
    let inputFuncao = valorFuncao.value

    
    this.funcionarioInfo.nome =valorNome.value
    this.funcionarioInfo.fazenda=valorFazenda.value
    this.funcionarioInfo.funcaoPrincipal=valorFuncao.value


    
    

    this.encontraFuncionairo(this.funcionarioInfo.nome,this.listaLocalStorageObject,this.funcionarioInfo.fazenda)
    this.cortaObj()
    this.sertaFuncionarioAtualizado()


    console.log(this.listLocalStorage)
    console.log(this.funcionarioInfo)
  }
  encontraFuncionairo(nome:string,list:Array<Object>,fazenda:string){
   // list.find(Element.arguments=="nome")
    list.forEach(elemental => {
      //this.constroiLsitaObjeto()
      Object.entries(elemental).forEach(element=>{
        if(element[1]==nome){
          console.log(elemental)
          Object.entries(elemental).forEach(element => {
            if(element[0]=="CPF"){
              console.log(element[1])
              this.CPF=element[1]
              console.log(this.CPF)
            }
            if(element[0]=="ativo"){
              
              
              
              console.log(element[1])
              this.ativo=element[1]
              console.log(this.ativo)
            }
            if(element[0]=="telefone"){
              console.log(element[1])
              this.telefone=element[1]
              console.log(this.telefone)
            }
            if(element[0]=="id"){
              console.log(element[1])
              this.id=element[1]
              console.log(this.id)
            }
            if(element[0]=="funcao_princila"){
              console.log(element[1])
              this.funcaoPrincipal=element[1]
              console.log(this.funcaoPrincipal)
            }
            if(element[0]=="nome"){
              console.log(element[1])
              this.nome=element[1]
              console.log(this.nome)
            }
            if(element[0]=="fazenda"){
              console.log(element[1])
              this.fazenda=element[1]
              console.log(this.fazenda)
            }
            
            
         });}
         
         
            
            
  
      }
       
      
      )
      console.log(Object.entries(elemental))
      
    });

  }

  

  constroiLsitaObjeto(){
    this.listLocalStorage.forEach(element => {
      console.log(JSON.parse(String(element)))
      this.listaLocalStorageObject.push(JSON.parse(String(element)))
      console.log(this.listaLocalStorageObject)
       console.log(element)
       //console.log(element.isPrototypeOf)
       
     });
  }

  setaObj(){
    this.funcionario_info.CPF=this.CPF
    this.funcionario_info.ativo=this.ativo
    this.funcionario_info.fazenda=this.fazenda
    this.funcionario_info.funcao_princila=this.funcaoPrincipal
    this.funcionario_info.id=this.id
    this.funcionario_info.nome=this.nome
    this.funcionario_info.telefone=this.telefone


    this.listaLocalStorageObject.splice(this.id,1)
    console.log(this.listaLocalStorageObject)
   let objectStringfado=JSON.stringify(this.funcionario_info)
   console.log(objectStringfado)
   return objectStringfado;

  }

  sertaFuncionarioAtualizado(){
    let valorNome = document.querySelector("#input-nome") as HTMLInputElement
    let valorFazenda = document.querySelector("#input-fazenda") as HTMLInputElement
    let valorFuncao = document.querySelector("#input-funcaoPrincipal") as HTMLInputElement
    
    let inputNome = valorNome.value
    let inputFazenda = valorFazenda.value
    let inputFuncao = valorFuncao.value
    let atividade = this.setaAtividade()

    this.funcionario_atualizado.nome=this.nome
    this.funcionario_atualizado.fazenda=inputFazenda
    this.funcionario_atualizado.funcao_princila=inputFuncao
    this.funcionario_atualizado.telefone=this.telefone
    this.funcionario_atualizado.id=this.id
    this.funcionario_atualizado.CPF=this.CPF
    this.funcionario_atualizado.ativo=atividade



   this.listaLocalStorageObject.push(this.funcionario_atualizado)
   console.log(this.listaLocalStorageObject);

   this.StringficaLsitaAtualizada()
   

    
  

  }
  cortaObj(){
    this.listLocalStorage.forEach(element => {
      
    });
  this.listLocalStorage.splice(this.listLocalStorage.indexOf(this.setaObj()),1)
            console.log(this.listLocalStorage)
            console.log(this.listaLocalStorageObject)}


  StringficaLsitaAtualizada(){
    this.listLocalStorage.splice(0,this.listLocalStorage.length)
    console.log(this.listLocalStorage)
    this.listaLocalStorageObject.forEach(element=>{
      var elementoString = JSON.stringify(element)
      this.listLocalStorage.push(elementoString)


    })
    console.log(this.listLocalStorage)
    localStorage.setItem('listaFuncionarios',String(JSON.stringify(this.listLocalStorage)))
  }

  setaAtividade(){
    var check = document.querySelector('#check') as HTMLInputElement
    var checkNo= document.querySelector('#check-no') as HTMLInputElement
    
    if(checkNo.checked==true){
      this.ativo=false;
      return false
    }if(check.checked==true){return true}else{
      return false
    }
   
    
   

}

  

}
