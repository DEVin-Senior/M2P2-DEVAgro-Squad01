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
  listaAtualizadaComObjetoStringficado:string=""
  listaString:Array<string>=[]
  valorNome = document.querySelector("#input-nome") as HTMLInputElement
  valorFazenda = document.querySelector("#input-fazenda") as HTMLInputElement
  valorFuncao = document.querySelector("#input-funcaoPrincipal") as HTMLInputElement
  

  alteraInfo(){ 
    console.log("xxxxx")
    let valorNome = document.querySelector("#input-nome") as HTMLInputElement
    let valorFazenda = document.querySelector("#input-fazenda") as HTMLInputElement
    let valorFuncao = document.querySelector("#input-funcaoPrincipal") as HTMLInputElement
    
    
    this.funcionarioInfo.nome =valorNome.value
    this.funcionarioInfo.fazenda=valorFazenda.value
    this.funcionarioInfo.funcaoPrincipal=valorFuncao.value
    console.log(this.funcionarioInfo.nome)
    console.log(this.funcionarioInfo.fazenda)
    console.log(this.funcionarioInfo.funcaoPrincipal)


    
    

    this.encontraFuncionairo(this.funcionarioInfo.nome,this.listaLocalStorageObject,this.funcionarioInfo.fazenda,this.funcionarioInfo.funcaoPrincipal)
    this.encontraEDeleta(this.funcionarioInfo.nome,this.listaLocalStorageObject)
    this.setaNovoObj(this.listaLocalStorageObject)
    this.stringficaLsita(this.listaLocalStorageObject)
    this.setaLocalStorage()
  }
  encontraFuncionairo(nome:string,list:Array<Object>,fazenda:string,funcao:string){
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
              this.ativo=this.setaAtividade()
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
              this.funcaoPrincipal=this.funcionarioInfo.funcaoPrincipal
              console.log(this.funcaoPrincipal)
            }
            if(element[0]=="nome"){
              console.log(element[1])
              this.nome=element[1]
              console.log(this.nome)
            }
            if(element[0]=="fazenda"){
              console.log(element[1])
              this.fazenda=this.funcionarioInfo.fazenda
              console.log(this.fazenda)
            }
            
            
         });}

         
         
         
         
            
            
  
      }
       
      
      )
      console.log(Object.entries(elemental))
      
    });

  }

  encontraEDeleta(nome:string,list:Array<Object>){
    console.log(list)
    // list.find(Element.arguments=="nome")
     list.forEach(elemental => {
       //this.constroiLsitaObjeto()
       Object.entries(elemental).forEach(element=>{
         if(element[1]==nome){
           list.splice(this.id,1)
           console.log(list)
           
             
          }})});
        }


    setaNovoObj(list:Array<Object>){
      this.funcionario_atualizado.CPF=this.CPF
    this.funcionario_atualizado.ativo=this.ativo
    this.funcionario_atualizado.fazenda=this.fazenda
    this.funcionario_atualizado.funcao_princila=this.funcaoPrincipal
    this.funcionario_atualizado.id=this.id
    this.funcionario_atualizado.nome=this.nome
    this.funcionario_atualizado.telefone=this.telefone
      console.log(list)
    list.splice(this.funcionario_atualizado.id,0,this.funcionario_atualizado)
    console.log(this.funcionario_atualizado)
    console.log(list);
    

    }

    stringficaLsita(list:Array<Object>){
       list.forEach(element => {
        var elementString = JSON.stringify(element)
        this.listaString.push(elementString)
        
       });
      console.log(this.listaString)
    }
    setaLocalStorage(){
      localStorage.setItem('listaFuncionarios',JSON.stringify(this.listaString))
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