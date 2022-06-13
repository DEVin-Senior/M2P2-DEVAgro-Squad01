import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  constructor() { }

  localStorageView: Array<Object> = Object(JSON.parse( String(localStorage.getItem("listaFuncionarios"))))
  localStorageViewObject : Array<Object> =[]

  ngOnInit(): void {
    console.log(this.localStorageView)
    console.log(this.localStorageView)


    this.localStorageView.forEach(element => {
     console.log( JSON.parse(String(element)))
      console.log(element)
      console.log(element.isPrototypeOf)
      
    });


    

    
  }


  constroiLsitaDeObj(){}

  

}



