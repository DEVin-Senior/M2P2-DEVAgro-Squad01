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
    


    

    
  }


  constroiLsitaDeObj(){}


}
